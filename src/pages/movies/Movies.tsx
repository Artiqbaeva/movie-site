import { useMovie } from "@/api/hooks/useMovie";
import MovieView from "@/components/movie-view/MovieView";
import React, { useState} from "react";
import {Pagination} from "antd"
import { useGenre } from "@/api/hooks/useGenre";
import Genre from "@/components/genre/Genre";


const Movies = () => {
  const { getMovies } = useMovie();
  const { getGenres } = useGenre()

  const { data: genreData } = getGenres()

  const [page, setPage] = useState(1);

  const { data } = getMovies({
    page: page,
    without_genres: "18,36,27,10749"
  });

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
    console.log("Selected page:", pageNumber);
  };

  return (
    <div className="container mx-auto px-4 pb-10 space-y-12">
      <section>
        <Genre data={genreData?.genres} />
      </section>

      <section>
        <MovieView data={data?.results} />
      </section>

      <section className="flex justify-center">
        <Pagination
          current={page}
          total={500}
          onChange={handlePageChange}
          pageSize={20}
          showSizeChanger={false}
        />
      </section>
    </div>
  );
};

export default React.memo(Movies);