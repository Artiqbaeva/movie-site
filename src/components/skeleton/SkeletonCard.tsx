import React from "react";

const SkeletonCard: React.FC = () => {
  return (
    <div className="bg-gray-200 dark:bg-[#1d1c1c] animate-pulse rounded-xl">
      <div className="w-full h-96 bg-gray-300 dark:bg-[#1a1919] rounded-t-xl"></div>
      <div className="p-3 space-y-2">
        <div className="h-5 bg-gray-300 dark:bg-[#242222] rounded"></div>
        <div className="h-4 w-1/2 bg-gray-300 dark:bg-[#292828] rounded"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
