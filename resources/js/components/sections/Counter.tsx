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

export default function Counter(): React.JSX.Element {
  return (
    <section className="relative flex items-center justify-center py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 lg:gap-[116px] w-full">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-start text-center"
            >
              <div className="[font-family:'Helvetica_Neue-Bold',Helvetica] font-bold text-[#ed0000] text-5xl md:text-6xl lg:text-[78px] tracking-[0] leading-tight md:leading-[93px] whitespace-nowrap">
                {stat.value}+
              </div>
              <div className="[font-family:'Hellix-SemiBold',Helvetica] font-semibold text-white text-base md:text-lg lg:text-xl tracking-[0] leading-normal md:leading-[31px] whitespace-nowrap">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
