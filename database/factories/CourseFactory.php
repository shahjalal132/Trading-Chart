<?php

namespace Database\Factories;

use App\Models\Course;
use App\Models\Instructor;
use Illuminate\Database\Eloquent\Factories\Factory;

class CourseFactory extends Factory
{
    protected $model = Course::class;

    public function definition(): array
    {
        return [
            'instructor_id' => Instructor::factory(),
            'title' => $this->faker->sentence(4),
            'slug' => $this->faker->unique()->slug(),
            'description' => $this->faker->paragraphs(3, true),
            'thumbnail_url' => $this->faker->imageUrl(640, 480, 'business', true),
            'price' => $this->faker->randomFloat(2, 0, 1000),
            'start_date' => $this->faker->dateTimeBetween('now', '+1 year'),
            'end_date' => $this->faker->dateTimeBetween('+1 year', '+2 years'),
            'start_time' => $this->faker->time(),
            'end_time' => $this->faker->time(),
            'total_seats' => $this->faker->numberBetween(10, 100),
            'total_reviews' => $this->faker->numberBetween(0, 100),
            'published_at' => $this->faker->optional()->dateTime(),
        ];
    }
}

