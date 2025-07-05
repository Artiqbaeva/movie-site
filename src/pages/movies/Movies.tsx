import { useMovie } from "@/api/hooks/useMovie";
import MovieView from "@/components/movie-view/MovieView";
import React, { useEffect } from "react";
import { Pagination } from "antd";
import { useGenre } from "@/api/hooks/useGenre";
import Genre from "@/components/genre/Genre";
import SkeletonCard from "@/components/skeleton/SkeletonCard";
import { useParamsHook } from "@/hooks/UsePramsHook";
import { useScrollToTop } from "@/hooks/useScrollToTop";
const Movies = () => {
  useScrollToTop()
  const { getMovies } = useMovie();
  const { getGenres } = useGenre();
  const { getParam, setParam } = useParamsHook();

  useEffect(() => {
    if (!getParam("genre")) {
      setParam("genre", "all");
    }
  }, []);

  const genre = getParam("genre") || "all";
  const page = Number(getParam("page")) || 1;

  const handlePagination = (value: number) => {
    setParam("page", value.toString());
    window.scrollTo({ top: 0, behavior: "smooth" }); 
  };

  const { data: genreData } = getGenres();

  const { data, isLoading } = getMovies({
    page,
    with_genres: genre === "all" ? undefined : genre,
    without_genres: "18,36,27,10749",
  });

  return (
    <div className="container mx-auto mt-18 px-4 pb-10 space-y-12 min-h-[80vh]">
      <section>
        <Genre data={genreData?.genres} />
      </section>

      <section>
        <MovieView
          data={data?.results}
          loading={isLoading}
          SkeletonComponent={<SkeletonCard />}
        />
      </section>

      <section className="flex justify-center">
        <Pagination
          current={page}
          onChange={handlePagination}
          pageSize={20}
          showSizeChanger={false}
          total={data?.total_results <= 10_000 ? data?.total_results : 10_000}
        />
      </section>
    </div>
  );
};

export default React.memo(Movies);