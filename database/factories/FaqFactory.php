<?php

namespace Database\Factories;

use App\Models\Course;
use App\Models\Faq;
use Illuminate\Database\Eloquent\Factories\Factory;

class FaqFactory extends Factory
{
    protected $model = Faq::class;

    public function definition(): array
    {
        return [
            'course_id' => Course::factory(),
            'question' => $this->faker->sentence() . '?',
            'answer' => $this->faker->paragraphs(2, true),
            'order' => $this->faker->numberBetween(1, 10),
        ];
    }
}

