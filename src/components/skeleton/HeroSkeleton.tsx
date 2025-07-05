import React from "react";

const HeroSkeleton: React.FC = () => {
  return (
    <section className="relative animate-pulse">
      <div className="h-[640px] w-full bg-gray-300 dark:bg-[#111] rounded-xl"></div>
      <div className="flex justify-center mt-5 space-x-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="w-20 h-20 bg-gray-300 lg:w-[75px] dark:bg-[#1b1a1a] rounded-xl"
          ></div>
        ))}
      </div>
    </section>
  );
};

export default HeroSkeleton;