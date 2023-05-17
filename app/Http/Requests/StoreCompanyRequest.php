<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreCompanyRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'document' => ['required', 'max:10', Rule::unique('companies')],
            'name'     => ['required', 'max:255'],
            'address'  => ['required', 'max:255'],
            'phone'    => ['nullable', 'max:10'],
        ];
    }
}
