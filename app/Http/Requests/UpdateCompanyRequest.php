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
            'nit'     => ['required', 'integer', 'digits_between:8,12', Rule::unique('companies')->ignore($company)],
            'name'    => ['required', 'string', 'between:5,255'],
            'address' => ['required', 'string', 'between:5,255'],
            'phone'   => ['nullable', 'string', 'between:5,15'],
        ];
    }
}
