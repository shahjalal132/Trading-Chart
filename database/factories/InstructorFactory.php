<?php

namespace Database\Factories;

use App\Models\Instructor;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class InstructorFactory extends Factory
{
    protected $model = Instructor::class;

    public function definition(): array
    {
        return [
            'user_id' => User::factory()->state(['role' => 'instructor']),
            'name' => $this->faker->name(),
            'description' => $this->faker->optional()->paragraphs(2, true),
        ];
    }
}

