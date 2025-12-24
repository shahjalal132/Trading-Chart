<?php

namespace App\Http\Controllers\Admin;

/**
 * Admin Dashboard Links Configuration
 * 
 * This class provides a centralized location for admin dashboard navigation links.
 * Use these routes in your admin dashboard UI components.
 */
class DashboardLinks
{
    /**
     * Get all admin dashboard navigation links.
     *
     * @return array
     */
    public static function getLinks(): array
    {
        return [
            [
                'label' => 'Dashboard',
                'route' => 'admin.dashboard',
                'icon' => 'dashboard',
            ],
            [
                'label' => 'Courses',
                'route' => 'admin.courses.index',
                'icon' => 'book',
                'children' => [
                    [
                        'label' => 'All Courses',
                        'route' => 'admin.courses.index',
                    ],
                    [
                        'label' => 'Create Course',
                        'route' => 'admin.courses.create',
                    ],
                ],
            ],
            [
                'label' => 'Users',
                'route' => 'admin.users.index',
                'icon' => 'users',
                'children' => [
                    [
                        'label' => 'All Users',
                        'route' => 'admin.users.index',
                    ],
                    [
                        'label' => 'Create User',
                        'route' => 'admin.users.create',
                    ],
                ],
            ],
            [
                'label' => 'Orders',
                'route' => 'admin.orders.index',
                'icon' => 'shopping-cart',
            ],
            [
                'label' => 'Coupons',
                'route' => 'admin.coupons.index',
                'icon' => 'tag',
                'children' => [
                    [
                        'label' => 'All Coupons',
                        'route' => 'admin.coupons.index',
                    ],
                    [
                        'label' => 'Create Coupon',
                        'route' => 'admin.coupons.create',
                    ],
                ],
            ],
            [
                'label' => 'Reviews',
                'route' => 'admin.reviews.index',
                'icon' => 'star',
            ],
        ];
    }

    /**
     * Get quick stats routes for dashboard widgets.
     *
     * @return array
     */
    public static function getStatsRoutes(): array
    {
        return [
            'total_courses' => route('admin.courses.index'),
            'total_users' => route('admin.users.index'),
            'total_orders' => route('admin.orders.index'),
            'total_reviews' => route('admin.reviews.index'),
        ];
    }
}

