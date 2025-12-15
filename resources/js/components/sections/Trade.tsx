import { Button } from "@/components/ui/button";
import React from "react";

export default function Trade() {
  return (
    <div className="relative flex items-start w-full">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[695px]">
          <div className="flex flex-col gap-12 max-w-[691px]">
            <div className="flex flex-col items-start gap-[67px]">
              <h1 className="[font-family:'Helvetica_Neue-Bold',Helvetica] font-bold text-white text-[80px] tracking-[0] leading-[93px]">
                Make You Trade Profession Successful
              </h1>

              <p className="[font-family:'Helvetica_Neue-Bold',Helvetica] font-bold text-white text-[32px] tracking-[0] leading-[42px]">
                Consistency beats intelligence in trading. Show up every day,
                results will follow."
              </p>
            </div>

            <div className="flex gap-[13px] items-center">
              <div className="w-[66px] h-px bg-white" />
              <div className="[font-family:'Hellix-Regular',Helvetica] font-normal text-white text-xl tracking-[0] leading-[31px] whitespace-nowrap">
                Robin Ahmed
              </div>
            </div>

            <p className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-xl tracking-[0] leading-[30px] max-w-[493px]">
              One step on your side if you're interested to make your
              professional.
            </p>

            <Button className="w-fit h-auto px-[30px] py-[21px] rounded-2xl border border-solid border-[#ffffff61] bg-[linear-gradient(180deg,rgba(24,129,0,1)_0%,rgba(1,25,3,1)_100%)] hover:opacity-90 transition-opacity">
              <span className="[font-family:'Poppins-SemiBold',Helvetica] font-semibold text-white text-base tracking-[0] leading-[26px] whitespace-nowrap">
                Enroll Now
              </span>
            </Button>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              className="w-full max-w-[693px] h-auto object-cover"
              alt="Professional trader"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='693' height='695'%3E%3Crect width='693' height='695' fill='%23333'/%3E%3C/svg%3E"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
