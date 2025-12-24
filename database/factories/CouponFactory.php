<?php

namespace Database\Factories;

use App\Models\Coupon;
use Illuminate\Database\Eloquent\Factories\Factory;

class CouponFactory extends Factory
{
    protected $model = Coupon::class;

    public function definition(): array
    {
        return [
            'code' => strtoupper($this->faker->unique()->bothify('???####')),
            'type' => $this->faker->randomElement(['percentage', 'fixed']),
            'value' => $this->faker->randomFloat(2, 5, 100),
            'expires_at' => $this->faker->optional()->dateTimeBetween('now', '+1 year'),
            'max_uses' => $this->faker->optional()->numberBetween(10, 1000),
            'total_uses' => 0,
            'is_active' => $this->faker->boolean(80),
        ];
    }
}

