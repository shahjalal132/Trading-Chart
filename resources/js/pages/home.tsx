import Contact from '@/components/sections/Contact';
import Counter from '@/components/sections/Counter';
import Footer from '@/components/sections/Footer';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Platforms from '@/components/sections/Platforms';
import Resources from '@/components/sections/Resources';
import React from 'react';

export default function Home(): React.JSX.Element {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-black">
            {/* Hero section background */}
            <div className="relative z-10">
                <div className="pointer-events-none absolute top-0 left-0 h-[897px] w-full bg-[var(--header-bg)]" />

                <div className="relative flex w-full flex-col">
                    <Header />
                    <div className="flex min-h-[897px] items-center bg-[var(--header-bg)] pb-24">
                        <div className="container mx-auto w-full px-4 md:px-[220px]">
                            <Hero />
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative z-10 flex flex-col">
                <div className="container mx-auto w-full py-10">
                    <Counter />
                </div>
                <div className="container mx-auto w-full">
                    <Resources/>
                </div>
                <div className="container mx-auto w-full">
                    <Platforms />
                </div>
                <div className="container mx-auto w-full">
                    <Contact />
                </div>
                <Footer />
            </div>
        </div>
    );
}
