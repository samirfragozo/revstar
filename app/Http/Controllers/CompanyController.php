<?php

namespace App\Http\Controllers;

use App\Http\Requests\Company\StoreRequest;
use App\Http\Requests\Company\UpdateRequest;
use App\Models\Company;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class CompanyController extends Controller
{
    public function index(): Response
    {
        $companies = Company::all();

        return Inertia::render('Company/Index', ['companies' => $companies]);
    }

    public function create(): Response
    {
        return Inertia::render('Company/Create');
    }

    public function store(StoreRequest $request): RedirectResponse
    {
        Company::create($request->validated());

        return redirect()->route('companies.index');
    }

    public function show(Company $company): Response
    {
        $company->load('products');

        return Inertia::render('Company/Show', ['company' => $company]);
    }

    public function edit(Company $company): Response
    {
        return Inertia::render('Company/Edit', ['company' => $company]);
    }

    public function update(UpdateRequest $request, Company $company): RedirectResponse
    {
        $company->update($request->validated());

        return redirect()->route('companies.index');
    }

    public function destroy(Company $company): RedirectResponse
    {
        $company->delete();

        return redirect()->route('companies.index');
    }
}
