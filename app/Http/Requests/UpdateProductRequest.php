<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProductRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'description' => ['nullable', 'string', 'max:255'],
            'quantity'    => ['required', 'integer'],
            'name'        => ['required', 'string', 'between:5,255'],
        ];
    }
}
