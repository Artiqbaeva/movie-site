import type { IGenre } from "@/types";
import React, { type FC } from "react";

interface Props {
  data: undefined | IGenre[];
}

const Genre: FC<Props> = ({ data }) => {
  return (
    <div className="flex overflow-x-auto gap-4 py-4 px-2 scrollbar-hide scrollbar- dark:scrollbar-thumb-gray-600">
  {data?.map((item: IGenre) => (
    <div
      key={item.id}
      className="flex-shrink-0  bg-gray-200 dark:bg-[#111111] text-gray-800 dark:text-gray-200 rounded-full px-4 py-2 text-sm font-medium cursor-pointer hover:bg-red-600 hover:text-white dark:hover:bg-red-600 whitespace-nowrap transition"
    >
      {item.name}
    </div>
  ))}
</div>
  );
};

export default React.memo(Genre);