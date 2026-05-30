<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        \App\Models\Product::insert([
            [
                'img' => 'assets\pic1.jpg',
                'brand' => 'Nike',
                'title' => 'Air Max 270',
                'rating' => 4.5,
                'reviews' => 120,
                'sellPrice' => 150.00,
                'orders' => '500+',
                'mrp' => '160.00',
                'discount' => 10,
                'category' => 'men',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'img' => 'assets\pic2.jpg',
                'brand' => 'Adidas',
                'title' => 'Ultraboost 22',
                'rating' => 4.5,
                'reviews' => 120,
                'sellPrice' => 150.00,
                'orders' => '500+',
                'mrp' => '200.00',
                'discount' => 10,
                'category' => 'men',
                'created_at' => now(),
                'updated_at' => now(),
            ],

        ]);
    }
}
