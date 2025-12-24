<?php

namespace Database\Factories;

use App\Models\CourseModule;
use App\Models\Lesson;
use Illuminate\Database\Eloquent\Factories\Factory;

class LessonFactory extends Factory
{
    protected $model = Lesson::class;

    public function definition(): array
    {
        return [
            'course_module_id' => CourseModule::factory(),
            'title' => $this->faker->sentence(4),
            'video_url' => $this->faker->url(),
            'duration' => $this->faker->numberBetween(10, 120) . ':00',
            'is_locked' => $this->faker->boolean(30),
            'order' => $this->faker->numberBetween(1, 20),
        ];
    }
}

