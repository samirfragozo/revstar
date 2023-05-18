<?php

namespace Database\Factories;

use App\Models\Company;
use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Product>
 */
class ProductFactory extends Factory
{
    public function definition(): array
    {
        return [
            'name'        => $this->faker->sentence,
            'description' => $this->faker->sentence,
            'quantity'    => $this->faker->numberBetween(1, 100),
            'company_id'  => Company::factory(),
        ];
    }
}
