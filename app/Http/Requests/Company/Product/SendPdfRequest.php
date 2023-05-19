<?php

namespace App\Http\Requests\Company\Product;

use Illuminate\Foundation\Http\FormRequest;

class SendPdfRequest extends FormRequest
{
    public function authorize(): bool
    {
        $user = $this->user();

        return $user && $user->can('view products');
    }

    public function rules(): array
    {
        return [
            'email' => ['required', 'email', 'max:255'],
        ];
    }
}
