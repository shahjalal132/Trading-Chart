import { Button } from "@/components/ui/button";
import React from "react";

export default function Marketing() {
  return (
    <section className="relative w-full min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="flex justify-center lg:justify-start">
            <img
              className="w-full max-w-[693px] h-auto"
              alt="Mask group"
              src="/mask-group.png"
            />
          </div>

          <div className="flex flex-col gap-8 lg:gap-12">
            <div className="flex flex-col gap-8 lg:gap-16">
              <h1 className="[font-family:'Helvetica_Neue-Bold',Helvetica] font-bold text-white text-4xl sm:text-5xl lg:text-[80px] tracking-[0] leading-tight lg:leading-[93px]">
                Join 10k+ Students in Trading Chart
              </h1>

              <h2 className="[font-family:'Helvetica_Neue-Bold',Helvetica] font-bold text-white text-xl sm:text-2xl lg:text-[32px] tracking-[0] leading-relaxed lg:leading-[42px]">
                Learn Trading The Simplex Way From Robin.
              </h2>
            </div>

            <p className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-lg sm:text-xl tracking-[0] leading-[30px]">
              Trading is not about being right—it&apos;s about managing what
              happens when you&apos;re wrong.
            </p>

            <div className="flex flex-wrap gap-6 lg:gap-[30px]">
              <Button className="bg-[linear-gradient(180deg,rgba(24,129,0,1)_0%,rgba(1,25,3,1)_100%)] h-auto px-[30px] py-[21px] rounded-2xl border border-solid border-[#ffffff61] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-white text-base tracking-[0] leading-[26px] hover:opacity-90">
                Enroll Now
              </Button>

              <Button className="bg-[linear-gradient(180deg,rgba(237,0,0,1)_0%,rgba(37,1,1,1)_100%)] h-auto px-[30px] py-[21px] rounded-2xl border border-solid border-[#ffffff61] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-white text-base tracking-[0] leading-[26px] hover:opacity-90">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        <footer className="mt-12 lg:mt-16">
          <p className="[font-family:'Helvetica_Neue-Bold',Helvetica] font-bold text-white text-xl sm:text-2xl lg:text-[32px] tracking-[0] leading-relaxed lg:leading-[42px]">
            I&apos;m success. I&apos;m ready to serve you my&nbsp;&nbsp;services
          </p>
        </footer>
      </div>
    </section>
  );
}
