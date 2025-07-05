import React, { useEffect, useState } from "react";
// import { useScrollToTop } from "@/hooks/useScrollToTop";
import { useMovie } from "@/api/hooks/useMovie";
import useDebounce from "@/hooks/useDebounce";
import { Input, Spin, Button } from "antd";
import type { IMovie } from "@/types";
import { LoadingOutlined, SearchOutlined } from "@ant-design/icons";
import {IMAGE_URL} from '@/const/index'
import { useNavigate } from "react-router-dom";
import { useScrollToTop } from "@/hooks/useScrollToTop";


const Search: React.FC = () => {
   useScrollToTop()
  const navigate = useNavigate();
  const [query, setQuery] = useState<string>("");
  const debounced = useDebounce(query);
  const { getSearchMovie } = useMovie();
  const { data, isLoading } = getSearchMovie({ query: debounced.trim() } );

  useEffect(() => {
    document.title = "Search Movies";
  }, []);

  const antIcon = (
    <LoadingOutlined style={{ fontSize: 40, color: "#dc2626" }} spin />
  );


  return (
    <div className="dark:bg-black  container mx-auto min-h-screen pt-28 px-1">
      <div className="max-w-md mx-auto mb-8">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movie..."
          size="large"
          style={{ borderColor: "red" }}
          prefix={<SearchOutlined className="text-gray-400" />}
          className="bg-[#1e1e1e] outline-none  rounded-full px-4 py-2"
        />
      </div>

      {isLoading ? (
        <div className="flex justify-center py-20">
          <Spin indicator={antIcon} />
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {data?.results?.length ? (
            data.results.slice(0, 8).map((movie: IMovie) => (
              <div
                key={movie.id}
                className="dark:bg-[#1e1e1e] rounded-xl overflow-hidden shadow hover:shadow-lg transition flex flex-col"
              >
                <img
                  src={
                    movie.poster_path
                      ? IMAGE_URL + movie.poster_path
                      : "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-7509.jpg"
                  }
                  alt={movie.title}
                  className="w-full h-[300px] object-cover"
                />
                <div className="p-4  flex flex-col flex-1">
                  <h3 className="dark:text-white font-semibold text-lg line-clamp-2">
                    {movie.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">
                    {movie.release_date?.slice(0, 4)} •{" "}       
                    {movie.original_language?.toUpperCase()} •{" "}
                    {movie.adult ? "18+" : "All Ages"}
                  </p>
                  
                  <div className="mt-auto">
                 <Button
                   type="primary"
                   danger
                   block
                   className="outline-none  bg-[#ddd] border-none text-white rounded"
                   onClick={() => navigate(`/movie/${movie.id}`)}
                   >
                 See movie
               </Button>
              </div>
                </div>
              </div>
            ))
          ) : (
            debounced && (
              <p className="col-span-full text-center text-gray-500 dark:text-gray-400 py-6">
                No results found.
              </p>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default React.memo(Search);
