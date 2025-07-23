import { useParamsHook } from "@/hooks/UsePramsHook";
import type { IGenre } from "@/types";
import React, { type FC } from "react";

interface Props {
  data: undefined | IGenre[];
}

const Genre: FC<Props> = ({ data }) => {
  const { setParam, getParam, removeParam } = useParamsHook();
  const genre = getParam("genre"); 
  const handleGenre = (id: number) => {
    if (genre === id.toString()) {
      removeParam("genre");
    } else {
      setParam("genre", id.toString());
    }
  };

  return (
    <div className="flex overflow-x-auto gap-4 py-4 px-2 scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-gray-200 dark:scrollbar-track-gray-800 dark:scrollbar-thumb-red-600">
      {data?.map((item: IGenre) => {
        const isActive = genre === item.id.toString(); 

        return (
          <div
            onClick={() => handleGenre(item.id)}
            key={item.id}
            className={`flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium cursor-pointer whitespace-nowrap transition ${
              isActive
                ? "bg-red-500 text-white" 
                : "bg-gray-200 text-black dark:bg-[#111111] dark:text-white" 
            }`}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(Genre);
