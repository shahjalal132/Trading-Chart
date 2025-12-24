<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Course extends Model
{
    use HasFactory;

    protected $fillable = [
        'author_id',
        'title',
        'slug',
        'description',
        'thumbnail_url',
        'price',
        'start_date',
        'end_date',
        'start_time',
        'end_time',
        'total_seats',
        'rating',
        'total_reviews',
        'published_at',
    ];

    protected function casts(): array
    {
        return [
            'price' => 'decimal:2',
            'rating' => 'decimal:1',
            'start_date' => 'date',
            'end_date' => 'date',
            'start_time' => 'datetime',
            'end_time' => 'datetime',
            'published_at' => 'datetime',
        ];
    }

    /**
     * Get the author (instructor) of the course.
     */
    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class, 'author_id');
    }

    /**
     * Get the learning objectives for the course.
     */
    public function learningObjectives(): HasMany
    {
        return $this->hasMany(LearningObjective::class)->orderBy('order');
    }

    /**
     * Get the modules for the course.
     */
    public function modules(): HasMany
    {
        return $this->hasMany(CourseModule::class)->orderBy('order');
    }

    /**
     * Get the enrollments for the course.
     */
    public function enrollments(): HasMany
    {
        return $this->hasMany(Enrollment::class);
    }

    /**
     * Get the reviews for the course.
     */
    public function reviews(): HasMany
    {
        return $this->hasMany(Review::class);
    }

    /**
     * Get the FAQs for the course.
     */
    public function faqs(): HasMany
    {
        return $this->hasMany(Faq::class)->orderBy('order');
    }

    /**
     * Get the order items for this course.
     */
    public function orderItems(): HasMany
    {
        return $this->hasMany(OrderItem::class, 'orderable_id')
            ->where('orderable_type', self::class);
    }

    /**
     * Check if course is published.
     */
    public function isPublished(): bool
    {
        return $this->published_at !== null;
    }
}

