<?php

namespace App\Http\Controllers\Company;

use App\Http\Controllers\Controller;
use App\Http\Requests\Company\Product\StoreRequest;
use App\Http\Requests\Company\Product\UpdateRequest;
use App\Models\Company;
use App\Models\Product;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class ProductController extends Controller
{
    public function create(Company $company): Response
    {
        return Inertia::render('Company/Product/Create', ['company' => $company]);
    }

    public function store(StoreRequest $request, Company $company): RedirectResponse
    {
        $company->products()->create($request->validated());

        return redirect()->route('companies.show', $company->getKey());
    }

    public function show(Company $company, Product $product): Response
    {
        return Inertia::render('Company/Product/Show', [
            'company' => $company,
            'product' => $product,
        ]);
    }

    public function edit(Company $company, Product $product): Response
    {
        return Inertia::render('Company/Product/Edit', [
            'company' => $company,
            'product' => $product,
        ]);
    }

    public function update(UpdateRequest $request, Company $company, Product $product): RedirectResponse
    {
        $product->update($request->validated());

        return redirect()->route('companies.show', $company->getKey());
    }

    public function destroy(Company $company, Product $product): RedirectResponse
    {
        $product->delete();

        return redirect()->route('companies.show', $company->getKey());
    }

    public function downloadPdf(Company $company): \Illuminate\Http\Response
    {
        $products = $company->products()->select('name', 'description', 'quantity')->get();

        $pdf = Pdf::loadView('products.pdf', compact('products'));

        return $pdf->download('inventario.pdf');
    }
}
