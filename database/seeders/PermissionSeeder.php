<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PermissionSeeder extends Seeder
{
    const MODELS      = [
        'companies',
        'products',
    ];
    const PERMISSIONS = [
        'view',
        'create',
        'update',
        'destroy',
    ];

    public function run(): void
    {
        $guestRole = Role::create(['name' => 'guest']);
        $adminRole = Role::create(['name' => 'admin']);

        foreach (self::MODELS as $model) {
            foreach (self::PERMISSIONS as $permission) {
                Permission::create(['name' => "$permission $model"]);
            }

            $guestRole->givePermissionTo("view $model");
        }

        $adminRole->givePermissionTo(Permission::all());
    }
}
