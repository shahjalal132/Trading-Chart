import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import React, { useState } from 'react';

export default function CourseDetailsInfo(): React.JSX.Element {
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

    const reviews = [
        {
            rating: 5,
            text: 'I would recommend practitioners at this center to everyone! They are great to work with & are excellent!',
            author: 'Ovi Rashed',
            role: 'Student Name',
        },
        {
            rating: 5,
            text: 'Amazing course! The instructor was knowledgeable and the content was well-structured. Highly recommended!',
            author: 'Sarah Johnson',
            role: 'Student Name',
        },
        {
            rating: 4,
            text: 'Great learning experience. The course materials were comprehensive and easy to follow.',
            author: 'Michael Chen',
            role: 'Student Name',
        },
    ];

    const nextReview = () => {
        setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrentReviewIndex(
            (prev) => (prev - 1 + reviews.length) % reviews.length,
        );
    };

    return (
        <div className="min-h-screen p-8 text-white">
            <div className="mx-auto max-w-6xl">
                {/* Main Content Grid */}
                <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {/* Course Image */}
                    <div className="lg:col-span-2">
                        <div className="aspect-video w-full rounded-2xl bg-gray-200"></div>
                    </div>

                    {/* Course Info Card */}
                    <div className="rounded-2xl bg-[#222428] p-6">
                        <h3 className="mb-4 text-lg font-semibold">
                            Course Info
                        </h3>

                        <div className="mb-6 space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="flex items-center text-gray-400">
                                    <span className="mr-2 text-red-500">
                                        📅
                                    </span>
                                    Start Date
                                </span>
                                <span className="text-sm">
                                    12 February 2025
                                </span>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="flex items-center text-gray-400">
                                    <span className="mr-2 text-red-500">
                                        📅
                                    </span>
                                    End Date
                                </span>
                                <span className="text-sm">30 October 2025</span>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="flex items-center text-gray-400">
                                    <span className="mr-2 text-red-500">
                                        🕐
                                    </span>
                                    Start Time
                                </span>
                                <span className="text-sm">09:00 am</span>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="flex items-center text-gray-400">
                                    <span className="mr-2 text-red-500">
                                        🕐
                                    </span>
                                    End Time
                                </span>
                                <span className="text-sm">06:00 pm</span>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="flex items-center text-gray-400">
                                    <span className="mr-2 text-red-500">
                                        👥
                                    </span>
                                    Total Seat
                                </span>
                                <span className="text-sm">50</span>
                            </div>
                        </div>

                        <div className="border-t border-gray-800 pt-4">
                            <div className="mb-4 flex items-center justify-between">
                                <span className="text-gray-400">
                                    Course Price:
                                </span>
                                <span className="text-2xl font-bold text-red-500">
                                    $450
                                </span>
                            </div>

                            <button className="w-full rounded-lg bg-red-600 py-3 font-semibold text-white transition-colors hover:bg-red-700">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>

                {/* Course Content Grid */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {/* Course Content Section - spans 2 columns on lg screens */}
                    <div className="lg:col-span-2">
                    {/* Course Title and Tabs */}
                    <div className="mb-6">
                        <div className="mb-3 flex items-center gap-2">
                            <span className="text-yellow-400">⭐</span>
                            <span className="text-sm text-gray-400">
                                (4.8 ★ Ratings)
                            </span>
                        </div>

                        <h1 className="mb-6 text-4xl font-bold">TRADE WITH ME</h1>

                        {/* Tabs */}
                        <div className="flex max-w-[593px] bg-[#222428] p-3 rounded-4xl gap-5">
                            <button className="rounded-full bg-red-600 px-6 py-2 text-sm font-medium">
                                Course Info
                            </button>
                            <button className="rounded-full  px-6 py-2 text-sm font-medium transition-colors hover:bg-gray-700">
                                Curriculum
                            </button>
                            <button className="rounded-full px-6 py-2 text-sm font-medium transition-colors hover:bg-gray-700">
                                Instructor
                            </button>
                            <button className="rounded-full  px-6 py-2 text-sm font-medium transition-colors hover:bg-gray-700">
                                Reviews
                            </button>
                        </div>
                    </div>

                    {/* Course Reviews Section */}
                    <div className="rounded-2xl bg-[#222428] p-8">
                        <h2 className="mb-6 text-2xl font-bold">Course Reviews</h2>

                        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
                            {/* Overall Rating */}
                            <div className="text-center">
                                <div className="mb-2 text-7xl font-bold text-yellow-400">
                                    4.9
                                </div>
                                <div className="mb-2 flex justify-center gap-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star
                                            key={star}
                                            className="h-5 w-5 fill-yellow-400 text-yellow-400"
                                        />
                                    ))}
                                </div>
                                <div className="text-sm text-gray-400">
                                    650+ Reviews
                                </div>
                            </div>

                            {/* Rating Breakdown */}
                            <div className="space-y-2 md:col-span-2">
                                {[
                                    { stars: 5, count: 92, total: 650 },
                                    { stars: 4, count: 103, total: 650 },
                                    { stars: 3, count: 68, total: 650 },
                                    { stars: 2, count: 34, total: 650 },
                                    { stars: 1, count: 41, total: 650 },
                                ].map((rating) => (
                                    <div
                                        key={rating.stars}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="flex w-24 gap-1">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star
                                                    key={star}
                                                    className={`h-3 w-3 ${
                                                        star <= rating.stars
                                                            ? 'fill-yellow-400 text-yellow-400'
                                                            : 'text-gray-600'
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                        <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#222428]">
                                            <div
                                                className="h-full bg-yellow-400"
                                                style={{
                                                    width: `${(rating.count / rating.total) * 100}%`,
                                                }}
                                            ></div>
                                        </div>
                                        <span className="w-8 text-sm text-gray-400">
                                            ({rating.count})
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Course Description Section */}
                    <div className="mt-6 rounded-2xl bg-[#222428] p-8">
                        {/* Review Carousel */}
                        <div className="relative mt-5 rounded-lg">
                            <div className="mb-4 flex justify-center gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                        key={star}
                                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                                    />
                                ))}
                            </div>

                            <p className="mx-auto mb-6 max-w-2xl text-center text-lg">
                                "{reviews[currentReviewIndex].text}"
                            </p>

                            <div className="flex items-center justify-center gap-3">
                                <div className="h-12 w-12 rounded-full bg-[#222428]"></div>
                                <div>
                                    <div className="font-semibold">
                                        {reviews[currentReviewIndex].author}
                                    </div>
                                    <div className="text-sm text-gray-400">
                                        {reviews[currentReviewIndex].role}
                                    </div>
                                </div>
                            </div>

                            {/* Navigation Buttons */}
                            <button
                                onClick={prevReview}
                                className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-[#222428] p-2 transition-colors hover:bg-gray-600"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>
                            <button
                                onClick={nextReview}
                                className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-[#222428] p-2 transition-colors hover:bg-gray-600"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}
