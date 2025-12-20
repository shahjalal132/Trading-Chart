import courseData from '@/data/course-details.json';
import React, { useState } from 'react';

interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

export default function FAQ(): React.JSX.Element {
    const faqs: FAQItem[] = courseData.faqs || [];

    // Initialize with FAQs 6 and 12 open by default (as in the original design)
    const [openFaqs, setOpenFaqs] = useState<Record<number, boolean>>({
        6: true,
        12: true,
    });

    const toggleFaq = (id: number) => {
        setOpenFaqs((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <section className="w-full px-4 py-16 md:py-20">
            <div className="container mx-auto">
                <div className="flex flex-col items-center">
                    {/* Header */}
                    <h2 className="mb-12 text-center text-4xl font-bold leading-tight md:text-5xl">
                        Frequently Asked
                        <br />
                        Questions
                    </h2>

                    {/* FAQ Grid */}
                    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
                        {faqs.map((faq) => (
                            <div
                                key={faq.id}
                                className={`rounded-lg border transition-all ${
                                    openFaqs[faq.id]
                                        ? 'border-green-500 bg-green-900 bg-opacity-20'
                                        : 'border-gray-800 bg-gray-900'
                                }`}
                            >
                                <button
                                    onClick={() => toggleFaq(faq.id)}
                                    className="flex w-full items-start justify-between gap-4 p-5 text-left"
                                >
                                    <span className="pr-4 text-sm font-medium md:text-base">
                                        {faq.id}. {faq.question}
                                    </span>
                                    <div
                                        className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full transition-colors ${
                                            openFaqs[faq.id]
                                                ? 'rotate-45 bg-green-500'
                                                : 'bg-gray-700'
                                        }`}
                                    >
                                        <span className="font-bold text-white">
                                            +
                                        </span>
                                    </div>
                                </button>

                                {openFaqs[faq.id] && (
                                    <div className="px-5 pb-5">
                                        <p className="text-sm leading-relaxed text-gray-300">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

