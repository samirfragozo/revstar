<?php

namespace App\Http\Requests\Company\Product;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
{
    public function authorize(): bool
    {
        $user = $this->user();

        return $user && $user->can('update products');
    }

    public function rules(): array
    {
        return [
            'description' => ['nullable', 'string', 'max:255'],
            'quantity'    => ['required', 'integer'],
            'name'        => ['required', 'string', 'between:5,255'],
        ];
    }
}
