<?php

namespace App\Http\Requests\Company;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreRequest extends FormRequest
{
    public function authorize(): bool
    {
        $user = $this->user();

        return $user && $user->can('create companies');
    }

    public function rules(): array
    {
        return [
            'address' => ['required', 'string', 'between:5,255'],
            'name'    => ['required', 'string', 'between:5,255'],
            'nit'     => ['required', 'integer', 'digits_between:8,12', Rule::unique('companies')],
            'phone'   => ['nullable', 'string', 'between:5,15'],
        ];
    }
}
