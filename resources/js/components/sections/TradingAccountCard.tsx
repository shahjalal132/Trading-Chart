import React from 'react';
import { Card } from '@/components/ui/card';
import GradientButton from '../GradientButton';

export interface TradingAccount {
    name: string;
    logo: string;
    href: string;
}

interface TradingAccountCardProps {
    account: TradingAccount;
}

export default function TradingAccountCard({
    account,
}: TradingAccountCardProps) {
    return (
        <Card className="h-80 border-[3px] border-solid border-[var(--border-light)] rounded-[19px] p-6">
            <div className="flex h-full flex-col items-center justify-center gap-6">
                <div className="flex h-20 w-20 items-center justify-center">
                    <img
                        src={account.logo}
                        alt={`${account.name} logo`}
                        className="h-20 w-20 object-cover"
                    />
                </div>

                <h3 className="text-center [font-family:'Helvetica_Neue-Bold',Helvetica] text-3xl leading-9 font-bold text-white">
                    {account.name}
                </h3>

                <GradientButton
                    variant="red"
                    href={account.href}
                    className="px-8 py-3"
                >
                    Sign Up Now
                </GradientButton>
            </div>
        </Card>
    );
}

