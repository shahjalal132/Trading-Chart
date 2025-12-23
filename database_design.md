# Database Design for Course Application

This document outlines the database schema for the course application. The design is based on the application's requirements for administrators and students, and inspired by the existing frontend components.

## Table of Contents

- [users](#users)
- [courses](#courses)
- [learning_objectives](#learning_objectives)
- [instructor_social_links](#instructor_social_links)
- [course_modules](#course_modules)
- [lessons](#lessons)
- [enrollments](#enrollments)
- [lesson_user (Progress)](#lesson_user-progress)
- [reviews](#reviews)
- [faqs](#faqs)
- [orders](#orders)
- [order_items](#order_items)
- [order_addresses](#order_addresses)
- [payments](#payments)
- [invoices](#invoices)
- [coupons](#coupons)
- [order_coupon](#order_coupon)

---

### `users`

This table stores user information. It's based on the default Laravel `users` table, with additions for roles, instructor bios, and avatars.

| Column Name         | Data Type                               | Constraints                        | Description                               |
| ------------------- | --------------------------------------- | ---------------------------------- | ----------------------------------------- |
| `id`                | `bigint`                                | `UNSIGNED`, `PRIMARY KEY`, `AI`    | Unique identifier for the user.           |
| `name`              | `varchar(255)`                          | `NOT NULL`                         | User's full name.                         |
| `email`             | `varchar(255)`                          | `NOT NULL`, `UNIQUE`               | User's email address.                     |
| `email_verified_at` | `timestamp`                             | `NULLABLE`                         | Timestamp of email verification.          |
| `password`          | `varchar(255)`                          | `NOT NULL`                         | Hashed password for the user.             |
| `role`              | `enum('admin', 'instructor', 'student')`| `NOT NULL`, `DEFAULT 'student'`    | Role of the user within the application.  |
| `bio`               | `text`                                  | `NULLABLE`                         | Biography for instructors.                |
| `avatar_url`        | `varchar(255)`                          | `NULLABLE`                         | URL for the user's profile picture.       |
| `remember_token`    | `varchar(100)`                          | `NULLABLE`                         | For "remember me" functionality.          |
| `created_at`        | `timestamp`                             | `NULLABLE`                         | Timestamp of user creation.               |
| `updated_at`        | `timestamp`                             | `NULLABLE`                         | Timestamp of last user update.            |

---

### `courses`

This table contains the main information about each course, including schedule details and cached review data.

| Column Name     | Data Type       | Constraints                     | Description                                       |
| --------------- | --------------- | ------------------------------- | ------------------------------------------------- |
| `id`            | `bigint`        | `UNSIGNED`, `PRIMARY KEY`, `AI` | Unique identifier for the course.                 |
| `author_id`     | `bigint`        | `UNSIGNED`, `FOREIGN KEY`       | The user (instructor) who created the course.     |
| `title`         | `varchar(255)`  | `NOT NULL`                      | The title of the course.                          |
| `slug`          | `varchar(255)`  | `NOT NULL`, `UNIQUE`            | URL-friendly version of the title.                |
| `description`   | `text`          | `NULLABLE`                      | A detailed description of the course.             |
| `thumbnail_url` | `varchar(255)`  | `NULLABLE`                      | URL for the course's thumbnail image.             |
| `price`         | `decimal(8, 2)` | `NOT NULL`, `DEFAULT 0.00`      | The price of the course.                          |
| `start_date`    | `date`          | `NULLABLE`                      | The start date of the course session.             |
| `end_date`      | `date`          | `NULLABLE`                      | The end date of the course session.               |
| `start_time`    | `time`          | `NULLABLE`                      | The daily start time of course classes.           |
| `end_time`      | `time`          | `NULLABLE`                      | The daily end time of course classes.             |
| `total_seats`   | `integer`       | `UNSIGNED`, `NULLABLE`          | The total number of available seats.              |
| `rating`        | `decimal(2, 1)` | `UNSIGNED`, `DEFAULT 0.0`       | Cached average rating from reviews.               |
| `total_reviews` | `integer`       | `UNSIGNED`, `DEFAULT 0`         | Cached total number of reviews.                   |
| `published_at`  | `timestamp`     | `NULLABLE`                      | Timestamp when the course is published.           |
| `created_at`    | `timestamp`     | `NULLABLE`                      | Timestamp of course creation.                     |
| `updated_at`    | `timestamp`     | `NULLABLE`                      | Timestamp of last course update.                  |

*Foreign Key:* `courses(author_id)` -> `users(id)`

---
8+/ghuop-[=][ cvbnm,] ### `learning_objectives`

This table stores the "What you will learn" points for a course.

| Column Name   | Data Type      | Constraints                     | Description                               |
| ------------- | -------------- | ------------------------------- | ----------------------------------------- |
| `id`          | `bigint`       | `UNSIGNED`, `PRIMARY KEY`, `AI` | Unique identifier for the objective.      |
| `course_id`   | `bigint`       | `UNSIGNED`, `FOREIGN KEY`       | The course these objectives belong to.    |
| `title`       | `varchar(255)` | `NOT NULL`                      | The title of the learning point.          |
| `description` | `text`         | `NOT NULL`                      | A description of the learning point.      |
| `order`       | `integer`      | `UNSIGNED`, `NOT NULL`          | The display order of the objective.       |

*Foreign Key:* `learning_objectives(course_id)` -> `courses(id)`

---

### `instructor_social_links`

This table stores social media links for instructors.

| Column Name | Data Type      | Constraints                     | Description                               |
| ----------- | -------------- | ------------------------------- | ----------------------------------------- |
| `id`        | `bigint`       | `UNSIGNED`, `PRIMARY KEY`, `AI` | Unique identifier for the social link.    |
| `user_id`   | `bigint`       | `UNSIGNED`, `FOREIGN KEY`       | The instructor user this link belongs to. |
| `platform`  | `varchar(255)` | `NOT NULL`                      | The social media platform (e.g., 'youtube').|
| `url`       | `varchar(255)` | `NOT NULL`                      | The URL of the social media profile.      |

*Foreign Key:* `instructor_social_links(user_id)` -> `users(id)`

---

### `course_modules`

Courses are broken down into modules, which are stored in this table.

| Column Name | Data Type      | Constraints                     | Description                               |
| ----------- | -------------- | ------------------------------- | ----------------------------------------- |
| `id`        | `bigint`       | `UNSIGNED`, `PRIMARY KEY`, `AI` | Unique identifier for the module.         |
| `course_id` | `bigint`       | `UNSIGNED`, `FOREIGN KEY`       | The course this module belongs to.        |
| `title`     | `varchar(255)` | `NOT NULL`                      | The title of the module.                  |
| `order`     | `integer`      | `UNSIGNED`, `NOT NULL`          | The display order of the module.          |
| `created_at`| `timestamp`    | `NULLABLE`                      | Timestamp of module creation.             |
| `updated_at`| `timestamp`    | `NULLABLE`                      | Timestamp of last module update.          |

*Foreign Key:* `course_modules(course_id)` -> `courses(id)`

---

### `lessons`

This table stores the individual lessons that make up a course module.

| Column Name        | Data Type      | Constraints                     | Description                               |
| ------------------ | -------------- | ------------------------------- | ----------------------------------------- |
| `id`               | `bigint`       | `UNSIGNED`, `PRIMARY KEY`, `AI` | Unique identifier for the lesson.         |
| `course_module_id` | `bigint`       | `UNSIGNED`, `FOREIGN KEY`       | The module this lesson belongs to.        |
| `title`            | `varchar(255)` | `NOT NULL`                      | The title of the lesson.                  |
| `video_url`        | `varchar(255)` | `NULLABLE`                      | URL for the lesson's video content.       |
| `duration`         | `varchar(255)` | `NULLABLE`                      | Duration of the lesson video (e.g., "45:00 m"). |
| `is_locked`        | `boolean`      | `NOT NULL`, `DEFAULT true`      | Whether the lesson requires enrollment to view. |
| `order`            | `integer`      | `UNSIGNED`, `NOT NULL`          | The display order of the lesson.          |
| `created_at`       | `timestamp`    | `NULLABLE`                      | Timestamp of lesson creation.             |
| `updated_at`       | `timestamp`    | `NULLABLE`                      | Timestamp of last lesson update.          |

*Foreign Key:* `lessons(course_module_id)` -> `course_modules(id)`

---

### `enrollments`

This table links users to the courses they have enrolled in. **Note:** An enrollment is created *after* a successful order and payment.

| Column Name   | Data Type   | Constraints                     | Description                               |
| ------------- | ----------- | ------------------------------- | ----------------------------------------- |
| `id`          | `bigint`    | `UNSIGNED`, `PRIMARY KEY`, `AI` | Unique identifier for the enrollment.     |
| `user_id`     | `bigint`    | `UNSIGNED`, `FOREIGN KEY`       | The user who enrolled.                    |
| `course_id`   | `bigint`    | `UNSIGNED`, `FOREIGN KEY`       | The course the user enrolled in.          |
| `order_id`    | `bigint`    | `UNSIGNED`, `FOREIGN KEY`       | The order associated with this enrollment.|
| `enrolled_at` | `timestamp` | `NOT NULL`                      | Timestamp of the enrollment.              |
| `created_at`  | `timestamp` | `NULLABLE`                      | Timestamp of record creation.             |
| `updated_at`  | `timestamp` | `NULLABLE`                      | Timestamp of last record update.          |

*Foreign Keys:*
- `enrollments(user_id)` -> `users(id)`
- `enrollments(course_id)` -> `courses(id)`
- `enrollments(order_id)` -> `orders(id)`
*Unique Constraint:* `(user_id, course_id)`

---

### `lesson_user` (Progress)

This pivot table tracks the progress of a user for each lesson.

| Column Name     | Data Type   | Constraints                     | Description                               |
| --------------- | ----------- | ------------------------------- | ----------------------------------------- |
| `id`            | `bigint`    | `UNSIGNED`, `PRIMARY KEY`, `AI` | Unique identifier for the progress record.|
| `user_id`       | `bigint`    | `UNSIGNED`, `FOREIGN KEY`       | The user watching the lesson.             |
| `lesson_id`     | `bigint`    | `UNSIGNED`, `FOREIGN KEY`       | The lesson being watched.                 |
| `completed_at`  | `timestamp` | `NULLABLE`                      | Timestamp when the user completed the lesson. |
| `created_at`    | `timestamp` | `NULLABLE`                      | Timestamp of record creation.             |
| `updated_at`    | `timestamp` | `NULLABLE`                      | Timestamp of last record update.          |

*Foreign Keys:*
- `lesson_user(user_id)` -> `users(id)`
- `lesson_user(lesson_id)` -> `lessons(id)`
*Unique Constraint:* `(user_id, lesson_id)`

---

### `reviews`

This table stores user reviews and ratings for courses.

| Column Name     | Data Type      | Constraints                     | Description                               |
| --------------- | -------------- | ------------------------------- | ----------------------------------------- |
| `id`            | `bigint`       | `UNSIGNED`, `PRIMARY KEY`, `AI` | Unique identifier for the review.         |
| `course_id`     | `bigint`       | `UNSIGNED`, `FOREIGN KEY`       | The course being reviewed.                |
| `user_id`       | `bigint`       | `UNSIGNED`, `FOREIGN KEY`       | The user who wrote the review.            |
| `rating`        | `tinyint`      | `UNSIGNED`, `NOT NULL`          | The rating given (1-5 stars).             |
| `comment`       | `text`         | `NULLABLE`                      | The text content of the review.           |
| `reviewer_title`| `varchar(255)` | `NULLABLE`                      | A self-reported title for the reviewer.   |
| `created_at`    | `timestamp`    | `NULLABLE`                      | Timestamp of review creation.             |
| `updated_at`    | `timestamp`    | `NULLABLE`                      | Timestamp of last review update.          |

*Foreign Keys:*
- `reviews(course_id)` -> `courses(id)`
- `reviews(user_id)` -> `users(id)`
*Unique Constraint:* `(course_id, user_id)`

---

### `faqs`

This table holds the Frequently Asked Questions for each course.

| Column Name  | Data Type      | Constraints                     | Description                               |
| ------------ | -------------- | ------------------------------- | ----------------------------------------- |
| `id`         | `bigint`       | `UNSIGNED`, `PRIMARY KEY`, `AI` | Unique identifier for the FAQ.            |
| `course_id`  | `bigint`       | `UNSIGNED`, `FOREIGN KEY`       | The course this FAQ belongs to.           |
| `question`   | `varchar(255)` | `NOT NULL`                      | The question being asked.                 |
| `answer`     | `text`         | `NOT NULL`                      | The answer to the question.               |
| `order`      | `integer`      | `UNSIGNED`, `NOT NULL`          | The display order of the FAQ.             |
| `created_at` | `timestamp`    | `NULLABLE`                      | Timestamp of FAQ creation.                |
| `updated_at` | `timestamp`    | `NULLABLE`                      | Timestamp of last FAQ update.             |

*Foreign Key:* `faqs(course_id)` -> `courses(id)`

---

## Checkout & Payment Tables

---

### `orders`

This table stores the primary information for each customer order.

| Column Name     | Data Type                                                       | Constraints                     | Description                                  |
| --------------- | --------------------------------------------------------------- | ------------------------------- | -------------------------------------------- |
| `id`            | `bigint`                                                        | `UNSIGNED`, `PRIMARY KEY`, `AI` | Unique identifier for the order.             |
| `user_id`       | `bigint`                                                        | `UNSIGNED`, `FOREIGN KEY`       | The user who placed the order.               |
| `order_number`  | `varchar(255)`                                                  | `NOT NULL`, `UNIQUE`            | A unique, human-readable order ID.           |
| `status`        | `enum('pending', 'processing', 'completed', 'failed', 'refunded')` | `NOT NULL`, `DEFAULT 'pending'` | The current status of the order.             |
| `subtotal`      | `decimal(10, 2)`                                                | `NOT NULL`                      | The total price before discounts and taxes.  |
| `discount`      | `decimal(10, 2)`                                                | `NOT NULL`, `DEFAULT 0.00`      | The amount discounted from a coupon.         |
| `total_amount`  | `decimal(10, 2)`                                                | `NOT NULL`                      | The final amount to be paid.                 |
| `payment_method`| `varchar(255)`                                                  | `NOT NULL`                      | e.g., 'paypal', 'stripe', 'bank_transfer'.   |
| `payment_status`| `enum('pending', 'paid', 'failed')`                             | `NOT NULL`, `DEFAULT 'pending'` | The payment status for the order.            |
| `notes`         | `text`                                                          | `NULLABLE`                      | Customer notes provided during checkout.     |
| `created_at`    | `timestamp`                                                     | `NULLABLE`                      | Timestamp of order creation.                 |
| `updated_at`    | `timestamp`                                                     | `NULLABLE`                      | Timestamp of last order update.              |

*Foreign Key:* `orders(user_id)` -> `users(id)`

---

### `order_items`

This table links an order to the products (courses) it contains.

| Column Name      | Data Type      | Constraints                     | Description                                       |
| ---------------- | -------------- | ------------------------------- | ------------------------------------------------- |
| `id`             | `bigint`       | `UNSIGNED`, `PRIMARY KEY`, `AI` | Unique identifier for the order item.             |
| `order_id`       | `bigint`       | `UNSIGNED`, `FOREIGN KEY`       | The order this item belongs to.                   |
| `orderable_id`   | `bigint`       | `UNSIGNED`, `NOT NULL`          | The ID of the item being purchased (e.g., course_id). |
| `orderable_type` | `varchar(255)` | `NOT NULL`                      | The model of the item (e.g., 'App\Models\Course').|
| `quantity`       | `integer`      | `UNSIGNED`, `NOT NULL`          | The quantity of the item purchased.               |
| `price`          | `decimal(8, 2)`| `NOT NULL`                      | The price of a single item at time of purchase.   |

*Foreign Key:* `order_items(order_id)` -> `orders(id)`
*Polymorphic Relation:* `(orderable_id, orderable_type)`

---

### `order_addresses`

This table stores the billing address for an order.

| Column Name      | Data Type      | Constraints                     | Description                                  |
| ---------------- | -------------- | ------------------------------- | -------------------------------------------- |
| `id`             | `bigint`       | `UNSIGNED`, `PRIMARY KEY`, `AI` | Unique identifier for the address.           |
| `order_id`       | `bigint`       | `UNSIGNED`, `FOREIGN KEY`       | The order this address belongs to.           |
| `first_name`     | `varchar(255)` | `NOT NULL`                      | Customer's first name.                       |
| `last_name`      | `varchar(255)` | `NOT NULL`                      | Customer's last name.                        |
| `company_name`   | `varchar(255)` | `NULLABLE`                      | Customer's company name.                     |
| `street_address` | `varchar(255)` | `NOT NULL`                      | Street address.                              |
| `apartment`      | `varchar(255)` | `NULLABLE`                      | Apartment, suite, etc.                       |
| `town`           | `varchar(255)` | `NOT NULL`                      | Town or city.                                |
| `county`         | `varchar(255)` | `NULLABLE`                      | County or state.                             |
| `postcode`       | `varchar(255)` | `NOT NULL`                      | Postal code.                                 |
| `country`        | `varchar(255)` | `NOT NULL`                      | Country.                                     |
| `phone`          | `varchar(255)` | `NULLABLE`                      | Customer's phone number.                     |
| `email`          | `varchar(255)` | `NOT NULL`                      | Customer's email address.                    |

*Foreign Key:* `order_addresses(order_id)` -> `orders(id)`

---

### `payments`

This table logs payment transactions for orders.

| Column Name        | Data Type      | Constraints                     | Description                                  |
| ------------------ | -------------- | ------------------------------- | -------------------------------------------- |
| `id`               | `bigint`       | `UNSIGNED`, `PRIMARY KEY`, `AI` | Unique identifier for the payment.           |
| `order_id`         | `bigint`       | `UNSIGNED`, `FOREIGN KEY`       | The order associated with this payment.      |
| `transaction_id`   | `varchar(255)` | `NULLABLE`                      | The ID from the payment gateway (e.g., PayPal).|
| `payment_method`   | `varchar(255)` | `NOT NULL`                      | The payment method used.                     |
| `amount`           | `decimal(10, 2)`| `NOT NULL`                      | The amount paid.                             |
| `status`           | `enum('succeeded', 'failed', 'pending')` | `NOT NULL` | The status of the transaction.               |
| `gateway_response` | `json`         | `NULLABLE`                      | Full response from the payment gateway.      |
| `created_at`       | `timestamp`    | `NULLABLE`                      | Timestamp of payment creation.               |
| `updated_at`       | `timestamp`    | `NULLABLE`                      | Timestamp of last payment update.            |

*Foreign Key:* `payments(order_id)` -> `orders(id)`

---

### `invoices`

This table stores invoice information for each paid order.

| Column Name      | Data Type      | Constraints                     | Description                                  |
| ---------------- | -------------- | ------------------------------- | -------------------------------------------- |
| `id`             | `bigint`       | `UNSIGNED`, `PRIMARY KEY`, `AI` | Unique identifier for the invoice.           |
| `order_id`       | `bigint`       | `UNSIGNED`, `FOREIGN KEY`       | The order this invoice is for.               |
| `invoice_number` | `varchar(255)` | `NOT NULL`, `UNIQUE`            | A unique, human-readable invoice number.     |
| `status`         | `enum('draft', 'sent', 'paid', 'void')` | `NOT NULL`, `DEFAULT 'draft'` | The status of the invoice.                   |
| `issued_at`      | `timestamp`    | `NOT NULL`                      | The date the invoice was issued.             |
| `due_at`         | `timestamp`    | `NULLABLE`                      | The date the invoice is due.                 |
| `created_at`     | `timestamp`    | `NULLABLE`                      | Timestamp of invoice creation.               |
| `updated_at`     | `timestamp`    | `NULLABLE`                      | Timestamp of last invoice update.            |

*Foreign Key:* `invoices(order_id)` -> `orders(id)`

---

### `coupons`

This table stores discount coupons.

| Column Name  | Data Type                       | Constraints                     | Description                                  |
| ------------ | ------------------------------- | ------------------------------- | -------------------------------------------- |
| `id`         | `bigint`                        | `UNSIGNED`, `PRIMARY KEY`, `AI` | Unique identifier for the coupon.            |
| `code`       | `varchar(255)`                  | `NOT NULL`, `UNIQUE`            | The coupon code to be entered by the user.   |
| `type`       | `enum('percentage', 'fixed')`   | `NOT NULL`                      | The type of discount.                        |
| `value`      | `decimal(8, 2)`                 | `NOT NULL`                      | The discount value.                          |
| `expires_at` | `timestamp`                     | `NULLABLE`                      | The expiration date of the coupon.           |
| `max_uses`   | `integer`                       | `UNSIGNED`, `NULLABLE`          | Maximum number of times the coupon can be used.|
| `total_uses` | `integer`                       | `UNSIGNED`, `NOT NULL`, `DEFAULT 0` | How many times the coupon has been used.     |
| `is_active`  | `boolean`                       | `NOT NULL`, `DEFAULT true`      | Whether the coupon is currently active.      |
| `created_at` | `timestamp`                     | `NULLABLE`                      | Timestamp of coupon creation.                |
| `updated_at` | `timestamp`                     | `NULLABLE`                      | Timestamp of last coupon update.             |

---

### `order_coupon`

This pivot table applies a coupon to an order.

| Column Name       | Data Type       | Constraints               | Description                                  |
| ----------------- | --------------- | ------------------------- | -------------------------------------------- |
| `order_id`        | `bigint`        | `UNSIGNED`, `FOREIGN KEY` | The order the coupon was applied to.         |
| `coupon_id`       | `bigint`        | `UNSIGNED`, `FOREIGN KEY` | The coupon that was used.                    |
| `discount_amount` | `decimal(10, 2)`| `NOT NULL`                | The actual amount that was discounted.       |

*Primary Keys:* `(order_id, coupon_id)`
*Foreign Keys:*
- `order_coupon(order_id)` -> `orders(id)`
- `order_coupon(coupon_id)` -> `coupons(id)`
