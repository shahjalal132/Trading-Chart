import React from 'react';

const statsData = [
  {
    value: "579k",
    label: "Our Subscribers",
  },
  {
    value: "21k",
    label: "Our Subscribers",
  },
  {
    value: "3k",
    label: "Active Clients",
  },
  {
    value: "05",
    label: "Years Experience",
  },
];

export default function Box(): React.JSX.Element {
  return (
    <section className="relative flex items-start min-w-[1205px]">
      <div className="w-[1205px] h-[92px]">
        <div className="flex justify-center items-start gap-[116px] w-full h-full">
          {statsData.map((stat, index) => (
            <div key={index} className="flex flex-col gap-[30px]">
              <div className="h-[55px] [font-family:'Helvetica_Neue-Bold',Helvetica] font-bold text-[#ed0000] text-[78px] tracking-[0] leading-[93px] whitespace-nowrap">
                {stat.value}
              </div>
              <div className="h-[7px] [font-family:'Hellix-SemiBold',Helvetica] font-semibold text-white text-xl tracking-[0] leading-[31px] whitespace-nowrap">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
