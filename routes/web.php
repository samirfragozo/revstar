<?php

use App\Http\Controllers\Company\ProductController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function() {
    return Inertia::render('Welcome', [
        'canLogin'       => Route::has('login'),
        'canRegister'    => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion'     => PHP_VERSION,
    ]);
});

Route::middleware('auth')->group(function() {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth', 'verified'])->group(function() {
    Route::redirect('/dashboard', '/companies')->name('dashboard');
    Route::resource('/companies', CompanyController::class);

    Route::prefix('/companies/{company}')->group(function() {
        Route::get('/products/download-pdf', [ProductController::class, 'downloadPdf'])->name('products.download-pdf');
        Route::resource('/products', ProductController::class)->except(['index']);
    });
});

require __DIR__ . '/auth.php';
