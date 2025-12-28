<?php

namespace Database\Seeders;

use App\Models\Coupon;
use App\Models\Instructor;
use App\Models\Order;
use App\Models\Review;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Create admin user
        User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
            'password' => bcrypt('password'),
            'role' => 'admin',
        ]);

        // Create instructors (this will also create associated users)
        Instructor::factory()->count(5)->create();

        // Create students
        User::factory()->count(20)->create(['role' => 'student']);

        // Seed courses with all related data
        $this->call(CourseSeeder::class);

        // Create reviews
        Review::factory()->count(50)->create();

        // Create coupons
        Coupon::factory()->count(10)->create();

        // Create orders
        Order::factory()->count(30)->create();
    }
}
