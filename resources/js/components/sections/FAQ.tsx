import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import courseData from '@/data/course-details.json';
import React from 'react';
import { cn } from '@/lib/utils';

interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

export default function FAQ(): React.JSX.Element {
    const faqs: FAQItem[] = courseData.faqs || [];

    // Initialize with FAQs 6 and 12 open by default (as in the original design)
    const defaultValue = ['6', '12'];

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
                    <Accordion
                        type="multiple"
                        defaultValue={defaultValue}
                        className="grid w-full grid-cols-1 gap-4 md:grid-cols-2"
                    >
                        {faqs.map((faq) => (
                            <AccordionItem
                                key={faq.id}
                                value={faq.id.toString()}
                                className={cn(
                                    'rounded-lg border transition-all',
                                    'border-gray-800 bg-gray-900',
                                    'data-[state=open]:border-green-500 data-[state=open]:bg-green-900 data-[state=open]:bg-opacity-20',
                                    '[&_button[data-state=open]_.faq-plus-icon]:rotate-45 [&_button[data-state=open]_.faq-plus-icon]:bg-green-500',
                                    'border-b-0'
                                )}
                            >
                                <AccordionTrigger
                                    className={cn(
                                        'flex w-full items-start justify-between gap-4 p-5 text-left',
                                        'hover:no-underline [&>svg]:hidden'
                                    )}
                                >
                                    <span className="pr-4 text-sm font-medium md:text-base">
                                        {faq.id}. {faq.question}
                                    </span>
                                    <div className="faq-plus-icon flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gray-700 transition-all">
                                        <span className="font-bold text-white">
                                            +
                                        </span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="px-5 pb-5 pt-0">
                                    <p className="text-sm leading-relaxed text-gray-300">
                                        {faq.answer}
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}

