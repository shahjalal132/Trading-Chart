# Admin Dashboard Setup Guide

This document outlines the admin dashboard structure, routes, and navigation links that have been created for the course application.

## Admin Routes

All admin routes are prefixed with `/admin` and require authentication. They are defined in `routes/admin.php`.

### Available Routes

#### Dashboard
- `GET /admin` - Admin dashboard (route: `admin.dashboard`)

#### Courses
- `GET /admin/courses` - List all courses (route: `admin.courses.index`)
- `GET /admin/courses/create` - Create course form (route: `admin.courses.create`)
- `POST /admin/courses` - Store new course (route: `admin.courses.store`)
- `GET /admin/courses/{course}` - Show course details (route: `admin.courses.show`)
- `GET /admin/courses/{course}/edit` - Edit course form (route: `admin.courses.edit`)
- `PUT /admin/courses/{course}` - Update course (route: `admin.courses.update`)
- `DELETE /admin/courses/{course}` - Delete course (route: `admin.courses.destroy`)

#### Users
- `GET /admin/users` - List all users (route: `admin.users.index`)
- `GET /admin/users/create` - Create user form (route: `admin.users.create`)
- `POST /admin/users` - Store new user (route: `admin.users.store`)
- `GET /admin/users/{user}` - Show user details (route: `admin.users.show`)
- `GET /admin/users/{user}/edit` - Edit user form (route: `admin.users.edit`)
- `PUT /admin/users/{user}` - Update user (route: `admin.users.update`)
- `DELETE /admin/users/{user}` - Delete user (route: `admin.users.destroy`)

#### Orders
- `GET /admin/orders` - List all orders (route: `admin.orders.index`)
- `GET /admin/orders/{order}` - Show order details (route: `admin.orders.show`)
- `PUT /admin/orders/{order}` - Update order status (route: `admin.orders.update`)

#### Coupons
- `GET /admin/coupons` - List all coupons (route: `admin.coupons.index`)
- `GET /admin/coupons/create` - Create coupon form (route: `admin.coupons.create`)
- `POST /admin/coupons` - Store new coupon (route: `admin.coupons.store`)
- `GET /admin/coupons/{coupon}/edit` - Edit coupon form (route: `admin.coupons.edit`)
- `PUT /admin/coupons/{coupon}` - Update coupon (route: `admin.coupons.update`)
- `DELETE /admin/coupons/{coupon}` - Delete coupon (route: `admin.coupons.destroy`)

#### Reviews
- `GET /admin/reviews` - List all reviews (route: `admin.reviews.index`)
- `DELETE /admin/reviews/{review}` - Delete review (route: `admin.reviews.destroy`)

## Dashboard Links Helper

Use the `DashboardLinks` class to get navigation links for your admin dashboard UI:

```php
use App\Http\Controllers\Admin\DashboardLinks;

// Get all navigation links
$links = DashboardLinks::getLinks();

// Get stats routes for dashboard widgets
$statsRoutes = DashboardLinks::getStatsRoutes();
```

### Navigation Structure

The links array contains:
- `label` - Display text for the link
- `route` - Laravel route name
- `icon` - Icon identifier (for your icon component)
- `children` - Optional sub-menu items

## Models Created

All models include proper relationships:

- **User** - with roles (admin, instructor, student)
- **Course** - with author, modules, lessons, reviews, FAQs
- **LearningObjective** - belongs to Course
- **InstructorSocialLink** - belongs to User
- **CourseModule** - belongs to Course, has Lessons
- **Lesson** - belongs to CourseModule
- **Enrollment** - links User to Course via Order
- **LessonUser** - tracks lesson progress
- **Review** - User reviews for Courses
- **FAQ** - FAQs for Courses
- **Order** - User orders
- **OrderItem** - Polymorphic order items
- **OrderAddress** - Billing addresses
- **Payment** - Payment transactions
- **Invoice** - Invoices for orders
- **Coupon** - Discount coupons
- **OrderCoupon** - Pivot table for order-coupon relationship

## Database Migrations

All migrations are created and ready to run:

```bash
php artisan migrate
```

## Seeders

Run seeders to populate test data:

```bash
php artisan db:seed
```

This will create:
- 1 admin user (admin@example.com / password)
- 5 instructors
- 20 students
- 10 courses with modules, lessons, FAQs, and learning objectives
- 50 reviews
- 10 coupons
- 30 orders

## Controllers

All admin controllers are located in `app/Http/Controllers/Admin/`:
- `AdminController` - Base admin controller with auth middleware
- `CourseController` - Full CRUD for courses
- `UserController` - Full CRUD for users
- `OrderController` - View and update orders
- `CouponController` - Full CRUD for coupons
- `ReviewController` - View and delete reviews

## Factories

Factories are available for:
- User
- Course
- LearningObjective
- CourseModule
- Lesson
- Review
- FAQ
- Order
- Coupon

## Next Steps

1. Create Inertia.js pages for admin dashboard UI
2. Implement authentication middleware checks
3. Add authorization policies for fine-grained permissions
4. Create admin dashboard layout component
5. Implement form validation and error handling
6. Add pagination and filtering to list views
7. Implement search functionality
8. Add export functionality for reports

