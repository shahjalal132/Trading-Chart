import React from 'react';
import GradientButton from '../GradientButton';
import SocialMediaCard, {
    type SocialMediaData,
} from './SocialMediaCard';

const communityPlatforms: SocialMediaData[] = [
    {
        name: 'Telegram',
        icon: '/assets/icons/telegram.png',
        buttonText: 'Message Us',
    },
    {
        name: 'Facebook',
        icon: '/assets/icons/facebook.png',
        buttonText: 'Message Us',
    },
    {
        name: 'TikTok',
        icon: '/assets/icons/tiktok.png',
        buttonText: 'Message Us',
    },
    {
        name: 'Instagram',
        icon: '/assets/icons/instagram.png',
        buttonText: 'Message Us',
    },
];

export default function Community() {
    return (
        <section className="w-full px-4">
            <div className="container mx-auto">
                <div className="flex flex-col items-center gap-8">
                    {/* Header */}
                    <div className="flex flex-col items-center gap-4 text-center">
                        <h2 className="[font-family:'Helvetica_Neue-Bold',Helvetica] text-5xl md:text-6xl lg:text-7xl leading-tight md:leading-[93px] font-bold text-white">
                            Join Our Community
                        </h2>
                        <p className="max-w-[794px] [font-family:'Hellix-Regular',Helvetica] text-lg md:text-xl leading-8 font-normal text-white">
                            With fast withdrawals, exceptional customer support,
                            and a smooth trading experience.
                        </p>
                    </div>

                    {/* Community Cards Grid */}
                    <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {communityPlatforms.map((platform, index) => (
                            <SocialMediaCard key={index} platform={platform} />
                        ))}
                    </div>

                    {/* Join Now Button */}
                    <div className="mt-5">
                        <GradientButton
                            variant="green"
                            href="/join"
                            className="px-8 py-3 font-semibold"
                        >
                            Join Now
                        </GradientButton>
                    </div>
                </div>
            </div>
        </section>
    );
}
