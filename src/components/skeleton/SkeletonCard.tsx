const SkeletonCard = () => {
    return (
      <div className="animate-pulse dark:bg-slate-900 bg-white rounded-xl shadow">
        <div className="bg-gray-300 dark:bg-gray-700 rounded-t-xl w-full aspect-[2/3]"></div>
        <div className="p-3 space-y-2">
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
        </div>
      </div>
    );
  };
export default SkeletonCard;  