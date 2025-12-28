import { Button } from '@/components/ui/button';
import CourseCard from '@/components/admin/CourseCard';
import AppSidebarLayout from '@/layouts/app/app-sidebar-layout';
import { Head, Link } from '@inertiajs/react';
import { Plus } from 'lucide-react';
import admin from '@/routes/admin';
import { type BreadcrumbItem } from '@/types';

interface Course {
    id: number;
    title: string;
    slug: string;
    description: string | null;
    thumbnail_url: string | null;
    price: number;
    start_date: string | null;
    end_date: string | null;
    rating: number | null;
    total_reviews: number;
    published_at: string | null;
    author: {
        id: number;
        name: string;
        email: string;
    } | null;
}

interface Props {
    courses: {
        data: Course[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    };
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Courses',
        href: admin.courses.index.url(),
    },
];

export default function CoursesIndex({ courses }: Props) {

    return (
        <AppSidebarLayout breadcrumbs={breadcrumbs}>
            <Head title="Courses" />
            
            <div className="container mx-auto p-6">
                <div className="mb-6 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">Courses</h1>
                        <p className="text-muted-foreground mt-2">
                            Manage your courses and content
                        </p>
                    </div>
                    <Button asChild>
                        <Link href={admin.courses.create.url()}>
                            <Plus className="mr-2 h-4 w-4" />
                            Create Course
                        </Link>
                    </Button>
                </div>

                {courses.data.length === 0 ? (
                    <div className="rounded-lg border bg-card p-12 text-center">
                        <p className="text-muted-foreground">No courses found. Create your first course to get started.</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {courses.data.map((course) => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </div>
                )}

                {/* Pagination */}
                {courses.last_page > 1 && (
                    <div className="mt-6 flex items-center justify-center gap-2">
                        <Button
                            variant="outline"
                            disabled={courses.current_page === 1}
                            asChild
                        >
                            <Link
                                href={admin.courses.index.url({
                                    query: { page: courses.current_page - 1 },
                                })}
                            >
                                Previous
                            </Link>
                        </Button>
                        <span className="text-sm text-muted-foreground">
                            Page {courses.current_page} of {courses.last_page}
                        </span>
                        <Button
                            variant="outline"
                            disabled={courses.current_page === courses.last_page}
                            asChild
                        >
                            <Link
                                href={admin.courses.index.url({
                                    query: { page: courses.current_page + 1 },
                                })}
                            >
                                Next
                            </Link>
                        </Button>
                    </div>
                )}
            </div>
        </AppSidebarLayout>
    );
}

