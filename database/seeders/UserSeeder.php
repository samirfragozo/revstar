<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        User::factory()->create([
            'email' => 'admin@revstar.test',
        ])->assignRole('admin');
        User::factory()->create([
            'email' => 'guest@revstar.test',
        ])->assignRole('guest');
    }
}
