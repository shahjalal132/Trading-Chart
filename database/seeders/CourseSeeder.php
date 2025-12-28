<?php

namespace Database\Seeders;

use App\Models\Course;
use App\Models\CourseModule;
use App\Models\Faq;
use App\Models\Instructor;
use App\Models\LearningObjective;
use App\Models\Lesson;
use Illuminate\Database\Seeder;

class CourseSeeder extends Seeder
{
    public function run(): void
    {
        // Create instructors
        $instructors = Instructor::factory()->count(3)->create();

        // Create courses with related data
        Course::factory()->count(10)->create([
            'instructor_id' => fn() => $instructors->random()->id,
        ])->each(function ($course) {
            // Create learning objectives
            LearningObjective::factory()->count(5)->create([
                'course_id' => $course->id,
            ]);

            // Create modules with lessons
            CourseModule::factory()->count(3)->create([
                'course_id' => $course->id,
            ])->each(function ($module) {
                Lesson::factory()->count(5)->create([
                    'course_module_id' => $module->id,
                ]);
            });

            // Create FAQs
            Faq::factory()->count(3)->create([
                'course_id' => $course->id,
            ]);
        });
    }
}

