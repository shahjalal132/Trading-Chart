import { Button } from "@/components/ui/button";
import React from "react";
import GradientButton from "../GradientButton";

export default function Trade() {
  return (
    <div className="relative flex items-start w-full">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[695px]">
          <div className="flex flex-col gap-8 max-w-[691px]">
            <div className="flex flex-col items-start gap-8">
              <h2 className="[font-family:'Helvetica_Neue-Bold',Helvetica] font-bold leading-normal text-white text-[60px]">
                Make You Trade Profession <br/> Successful
              </h2>

              <p className="[font-family:'Helvetica_Neue-Bold',Helvetica] font-bold mt-4 text-white text-[32px] tracking-[0] leading-[42px]">
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

            <GradientButton variant="green" href="/trade" className="px-4 py-4">
              Enroll Now
            </GradientButton>
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
