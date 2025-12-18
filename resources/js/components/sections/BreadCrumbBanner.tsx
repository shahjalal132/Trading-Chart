import { ChevronsRight } from 'lucide-react';
import { Link } from '@inertiajs/react';

export interface BreadcrumbItem {
    title: string;
    href: string;
}

interface BreadCrumbBannerProps {
    title: string;
    breadcrumbs: BreadcrumbItem[];
}

export default function BreadCrumbBanner({
    title,
    breadcrumbs,
}: BreadCrumbBannerProps) {
    return (
        <section
            className="relative flex min-h-[200px] w-full items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-8 md:min-h-[280px] md:h-[342px] lg:h-[342px]"
            style={{
                backgroundImage: "url('/assets/images/breadcrumbBanner.png')",
            }}
        >
            <div className="container mx-auto flex flex-col items-center justify-center gap-4">
                {/* Breadcrumb Navigation */}
                <nav className="flex items-center gap-2">
                    {breadcrumbs.map((breadcrumb, index) => (
                        <div key={index} className="flex items-center gap-2">
                            {index > 0 && (
                                <ChevronsRight className="h-4 w-4 text-white" />
                            )}
                            <Link
                                href={breadcrumb.href}
                                className={`[font-family:'DM_Sans-Regular',Helvetica] text-base leading-6 font-normal tracking-[0] transition-opacity hover:opacity-80 ${
                                    index === breadcrumbs.length - 1
                                        ? 'text-white'
                                        : 'text-white/80'
                                }`}
                            >
                                {breadcrumb.title}
                            </Link>
                        </div>
                    ))}
                </nav>

                {/* Title */}
                <h1 className="text-center [font-family:'DM_Sans-SemiBold',Helvetica] text-3xl leading-tight font-semibold tracking-[0] text-white md:text-4xl lg:text-[50px]">
                    {title}
                </h1>
            </div>
        </section>
    );
}
