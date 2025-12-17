import { Card, CardContent } from '@/components/ui/card';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import GradientButton from '../GradientButton';

gsap.registerPlugin(ScrollTrigger);

interface ResourcesData {
    title: string;
    features: string[];
    price: string;
}

const resourcesData: ResourcesData[] = [
    {
        title: 'CONSULTATION',
        features: [
            'Trading guidance and Investments',
            'Strategy Improvement',
            'Risk management advice',
            'Beginner assistance',
            'Mentorship support',
            'Trading psychology tips',
        ],
        price: '$50',
    },
    {
        title: 'TRADE WITH ME',
        features: [
            'Real time market analysis',
            'Live trade with high accuracy',
            'Entry exit plan',
            '24/7 Support',
            'Copy my every trades',
            'Risk management like me',
            '25% Growth per session',
        ],
        price: 'Free',
    },
    {
        title: 'COURSE',
        features: [
            'Basic to advance',
            'Price action',
            'SMC / ICT and many proven trading strategies',
            'Classes: 15 live sessions via Google meet',
            'Time: Classes will start at 9:00 p.m. (Bangladesh time)',
            'All the classes will be recorded for your practice and review',
        ],
        price: '$900',
    },
    {
        title: 'FREE LIVE TRIALS',
        features: [
            'Live Trades',
            'Copy my Trade',
            'Entry exit',
            'Aftermarket analysis and review',
            'Trades management',
        ],
        price: 'Free',
    },
];

export default function Resources() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (!sectionRef.current) return;

        // Wait for cards to be rendered
        const validCards = cardsRef.current.filter((card) => card !== null);
        if (validCards.length === 0) return;

        // Set initial states
        gsap.set(validCards, { opacity: 0, y: 100 });

        // Scroll reveal animation
        gsap.to(validCards, {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
            },
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
            ease: 'power2.out',
        });

        // Hover effects for each card
        cardsRef.current.forEach((card) => {
            if (!card) return;

            const handleMouseEnter = () => {
                gsap.to(card, {
                    scale: 1.05,
                    y: -10,
                    boxShadow:
                        '0 25.6px 57.6px 0 rgba(237, 0, 0, 0.4), 0 4.8px 14.4px 0 rgba(237, 0, 0, 0.3), 0 0 0 1px rgba(237, 0, 0, 0.2)',
                    duration: 0.3,
                    ease: 'power2.out',
                });
            };

            const handleMouseLeave = () => {
                gsap.to(card, {
                    scale: 1,
                    y: 0,
                    boxShadow: 'none',
                    duration: 0.3,
                    ease: 'power2.out',
                });
            };

            card.addEventListener('mouseenter', handleMouseEnter);
            card.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                card.removeEventListener('mouseenter', handleMouseEnter);
                card.removeEventListener('mouseleave', handleMouseLeave);
            };
        });

        // Refresh ScrollTrigger after setup
        ScrollTrigger.refresh();

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="flex min-h-screen w-full items-center justify-center px-4"
        >
            <div className="flex w-full max-w-[1621px] flex-col items-center">
                <h1 className="mb-10 text-center [font-family:'Helvetica_Neue-Bold',Helvetica] text-5xl leading-tight font-bold tracking-[0] text-white md:text-[80px]">
                    Your Resources
                </h1>

                <p className="mb-12 text-center [font-family:'Hellix-Regular',Helvetica] text-lg leading-[31px] font-normal tracking-[0] text-white md:text-xl">
                    One of the world&apos;s most popular multi-asset brokers.
                </p>

                <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {resourcesData.map((resource, index) => (
                        <Card
                            key={index}
                            ref={(el) => {
                                cardsRef.current[index] = el;
                            }}
                            className="flex cursor-pointer flex-col rounded-[19px] border-[3px] border-solid border-[#ffffff36] bg-[#121212]"
                        >
                            <CardContent className="flex flex-1 flex-col p-6">
                                <h2 className="mb-8 text-center [font-family:'Helvetica_Neue-Bold',Helvetica] text-2xl leading-[38px] font-bold tracking-[0] text-white md:text-left md:text-[32px]">
                                    {resource.title}
                                </h2>

                                <ul className="flex flex-col gap-4">
                                    {resource.features.map(
                                        (feature, featureIndex) => (
                                            <li
                                                key={featureIndex}
                                                className="flex items-center gap-3.5"
                                            >
                                                <div className="mt-1 h-[5px] w-[5px] min-w-[5px] rounded-[2.5px] bg-[#ffffff70]" />
                                                <span className="[font-family:'Satoshi-Medium',Helvetica] text-base leading-7 font-medium tracking-[0] text-white">
                                                    {feature}
                                                </span>
                                            </li>
                                        ),
                                    )}
                                </ul>

                                <div className="mt-12">
                                    <GradientButton
                                        variant="red"
                                        href="/get-started"
                                        className="px-8 py-3 font-semibold"
                                    >
                                        Get Started Now
                                    </GradientButton>
                                </div>

                                <div className="mt-7 flex flex-col gap-5">
                                    <span className="[font-family:'Satoshi-Medium',Helvetica] text-base leading-7 font-medium tracking-[0] text-white">
                                        Course price
                                    </span>
                                    <span className="[font-family:'Helvetica_Neue-Bold',Helvetica] text-4xl leading-[38px] font-bold tracking-[0] text-white md:text-[56px]">
                                        {resource.price}
                                    </span>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
