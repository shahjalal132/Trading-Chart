import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { cn } from '@/lib/utils';

interface GradientButtonProps {
    variant: 'green' | 'red';
    href: string;
    children: React.ReactNode;
    className?: string;
}

export default function GradientButton({
    variant,
    href,
    children,
    className,
}: GradientButtonProps) {
    const gradientStyle =
        variant === 'green'
            ? `linear-gradient(180deg, var(--gradient-green-start) 0%, var(--gradient-green-end) 100%)`
            : `linear-gradient(180deg, var(--gradient-red-start) 0%, var(--gradient-red-end) 100%)`;

    const widthClass = variant === 'green' ? 'w-[102px]' : 'w-[116px]';

    return (
        <Button
            asChild
            className={cn(
                'h-[43px] rounded-2xl border border-solid border-[var(--border-medium)] [font-family:\'Poppins-SemiBold\',Helvetica] text-base leading-[26px] font-semibold tracking-[0] text-white transition-opacity hover:opacity-90 hover:cursor-pointer',
                widthClass,
                className
            )}
            style={{
                background: gradientStyle,
            }}
        >
            <Link href={href}>{children}</Link>
        </Button>
    );
}

