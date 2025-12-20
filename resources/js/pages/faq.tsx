import BreadCrumbBanner from '@/components/sections/BreadCrumbBanner';
import Community from '@/components/sections/Community';
import FAQ from '@/components/sections/FAQ';
import WebLayout from '@/layouts/web-layout';
import { Head } from '@inertiajs/react';

export default function FAQPage(): React.JSX.Element {
    return (
        <WebLayout>
            <Head title="FAQ" />
            <BreadCrumbBanner
                title="Our FAQ's"
                breadcrumbs={[
                    { title: 'Home', href: '/' },
                    { title: 'FAQ\'s', href: '/faq' },
                ]}
            />

            {/* FAQ Section */}
            <FAQ />

            {/* Community */}
            <div className="w-full pt-30 pb-20">
                <Community />
            </div>
        </WebLayout>
    );
}
