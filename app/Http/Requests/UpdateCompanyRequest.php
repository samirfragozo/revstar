<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateCompanyRequest extends FormRequest
{
    public function rules(): array
    {
        $company = $this->route('company');

        return [
            'nit' => ['required', 'max:10', Rule::unique('companies')->ignore($company)],
            'name'     => ['required', 'max:255'],
            'address'  => ['required', 'max:255'],
            'phone'    => ['nullable', 'max:10'],
        ];
    }
}
