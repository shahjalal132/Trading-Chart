<?php

namespace Database\Factories;

use App\Models\Order;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class OrderFactory extends Factory
{
    protected $model = Order::class;

    public function definition(): array
    {
        $subtotal = $this->faker->randomFloat(2, 10, 1000);
        $discount = $this->faker->randomFloat(2, 0, $subtotal * 0.3);
        $total = $subtotal - $discount;

        return [
            'user_id' => User::factory(),
            'order_number' => 'ORD-' . strtoupper($this->faker->unique()->bothify('#######')),
            'status' => $this->faker->randomElement(['pending', 'processing', 'completed', 'failed', 'refunded']),
            'subtotal' => $subtotal,
            'discount' => $discount,
            'total_amount' => $total,
            'payment_method' => $this->faker->randomElement(['paypal', 'stripe', 'bank_transfer', 'cash_on_delivery']),
            'payment_status' => $this->faker->randomElement(['pending', 'paid', 'failed']),
            'notes' => $this->faker->optional()->sentence(),
        ];
    }
}

