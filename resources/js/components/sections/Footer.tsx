import { Separator } from '@/components/ui/separator';
import {
    ChevronRight,
    Facebook,
    Instagram,
    Linkedin,
    Twitter,
    Youtube,
} from 'lucide-react';
import React from 'react';
import AppLogo from '../AppLogo';
import { Link } from '@inertiajs/react';

const quickLinks = [
    { label: 'Services', href: '/services' },
    { label: 'Platform', href: '/platform' },
    { label: 'Social', href: '/social' },
];

const contactPhones = ['+88 (09) 53 33 09', '+88 (09) 53 33 09'];

interface SocialIcon {
    name: string; // icon name of lucide-react
    url?: string; // social media url
}

const socialIcons: SocialIcon[] = [
    { name: 'facebook', url: 'https://facebook.com' },
    { name: 'twitter', url: 'https://twitter.com' },
    { name: 'instagram', url: 'https://instagram.com' },
    { name: 'linkedin', url: 'https://linkedin.com' },
    { name: 'youtube', url: 'https://youtube.com' },
];

export default function Footer() {
    return (
        <footer className="w-full bg-[var(--footer-bg)] py-16 text-white md:py-24">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                    <div className="lg:col-span-5">
                        <div className="mb-6 flex items-center gap-3">
                            <AppLogo src="/assets/images/logo.png" />
                        </div>
                        <p className="text-xl leading-[31px] font-normal text-white/80">
                            I am deeply committed to every student, which is why
                            I regularly provide feedback, market updates, signal
                            guidelines, and personal corrections. I always teach
                            using updated market trends, data analytics, and
                            modern trading techniques so that.
                        </p>
                    </div>

                    <div className="flex justify-center lg:col-span-1">
                        <div className="flex h-full flex-col items-center">
                            <Separator
                                orientation="vertical"
                                className="h-full w-px bg-gradient-to-b from-black via-white/50 to-black"
                            />
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="mb-12 text-[22px] leading-10 font-bold">
                            Quick Links
                        </h3>
                        <nav className="flex flex-col gap-4">
                            {quickLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className="flex items-center gap-2 text-base text-white/80 transition-colors hover:text-white"
                                >
                                    <div className="flex gap-1">
                                        <ChevronRight className="h-3 w-3" />
                                        <ChevronRight className="-ml-2 h-3 w-3" />
                                    </div>
                                    <span>{link.label}</span>
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div className="flex justify-center lg:col-span-1">
                        <div className="flex h-full flex-col items-center">
                            <Separator
                                orientation="vertical"
                                className="h-full w-px bg-gradient-to-b from-black via-white/50 to-black"
                            />
                        </div>
                    </div>

                    <div className="lg:col-span-3">
                        <h3 className="mb-12 text-[22px] leading-10 font-bold">
                            Contact Us
                        </h3>
                        <div className="flex flex-col gap-[59px]">
                            <div className="flex gap-3">
                                <img
                                    src="/assets/icons/phone.png"
                                    alt="Phone"
                                    className="h-13 w-13"
                                />
                                <div className="flex flex-col gap-2">
                                    <span className="text-base text-white/80">
                                        Call Us
                                    </span>
                                    <div className="flex flex-col">
                                        {contactPhones.map((phone, index) => (
                                            <a
                                                key={index}
                                                href={`tel:${phone}`}
                                                className="text-lg font-medium text-white transition-colors hover:text-white/80"
                                            >
                                                {phone}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <img
                                    src="/assets/icons/mail.png"
                                    alt="Mail"
                                    className="h-13 w-13"
                                />
                                <div className="flex flex-col gap-2">
                                    <span className="text-base text-white/80">
                                        Mail Us
                                    </span>
                                    <div className="flex flex-col">
                                    <a
                                        href="mailto:tradingchart@gmail.com"
                                        className="text-lg font-medium text-white transition-colors hover:text-white/80"
                                        >
                                            tradingchart@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex gap-4">
                    {socialIcons.map((icon, index) => {
                        const iconMap: Record<
                            string,
                            React.ComponentType<{ className?: string }>
                        > = {
                            facebook: Facebook,
                            twitter: Twitter,
                            instagram: Instagram,
                            linkedin: Linkedin,
                            youtube: Youtube,
                        };

                        const IconComponent = iconMap[icon.name.toLowerCase()];

                        return (
                            <a
                                key={index}
                                href={icon.url || '#'}
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                            >
                                {IconComponent ? (
                                    <IconComponent className="h-5 w-5 text-white" />
                                ) : (
                                    <span className="h-5 w-5" />
                                )}
                            </a>
                        );
                    })}
                </div>

                <div className="mt-1 pt-8">
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <p className="text-sm text-white/60">
                            © {new Date().getFullYear()} Trading Chart. All
                            rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <Link
                                href="/terms"
                                className="text-sm text-white/60 transition-colors hover:text-white/80"
                            >
                                Terms & Policies
                            </Link>
                            <Link
                                href="/privacy"
                                className="text-sm text-white/60 transition-colors hover:text-white/80"
                            >
                                Privacy Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
