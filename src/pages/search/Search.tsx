import React, { useEffect, useState } from "react";
import { useMovie } from "@/api/hooks/useMovie";
import useDebounce from "@/hooks/useDebounce";
import { Input, Spin } from "antd";
import { LoadingOutlined, SearchOutlined } from "@ant-design/icons";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import MovieView from "@/components/movie-view/MovieView";
import { useParamsHook } from "@/hooks/UsePramsHook";


const Search: React.FC = () => {
  useScrollToTop()
  const {setParam, getParam} = useParamsHook();
  const { getSearchMovie } = useMovie();
  const query = getParam("query") || "";
  const [value, setQuery] = useState(query || "");
  const debounced = useDebounce(value, 500);
  const { data, isLoading } = getSearchMovie({ query: query? query : debounced.trim(), page: "1" } );

  useEffect(() => {
    if (debounced) {
      setParam("query", debounced);
    } else {
      setParam("query", "");
    }
  }, [  debounced  ]);

  const antIcon = (
    <LoadingOutlined style={{ fontSize: 40, color: "#dc2626" }} spin />
  );

  return (
    <div className="container mx-auto min-h-screen pt-28 px-1">
      <div className="max-w-md  mx-auto mb-8">
            <Input
              value={value}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search movie..."
              size="large"
              style={{
                borderColor: "red",
                backgroundColor: "#111",
                
              }}
              prefix={
                <SearchOutlined
                  style={{ color: "red" }}
                />
              }
              className="bg-[#111] outline-none rounded-full px-4 py-2 custom-input-text"
            />
          </div>

      {isLoading ? (
        <div className="flex justify-center py-20">
          <Spin indicator={antIcon} />
        </div>
      ) : (
        <div className=" gap-6  mx-auto">
         <div><MovieView data={data?.results}/>
          </div>  
          {data?.results?.length === 0 && (
            <div className="text-center text-gray-500 col-span-4">
              No results found for "{query}"
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default React.memo(Search);