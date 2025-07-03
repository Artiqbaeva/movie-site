import { useMovie } from "@/api/hooks/useMovie";
import { IMAGE_URL } from "@/const";
import { NavLink, useParams } from "react-router-dom";
import { Image } from "antd";
import MovieView from "@/components/movie-view/MovieView";
import { useEffect } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
const MovieDetail = () => {
  const { id } = useParams();
  const { getMovieSingle, getMovieDetail } = useMovie();
  const antIcon = (
    <LoadingOutlined style={{ fontSize: 40, color: "red" }} spin />
  );
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  const { data, isLoading } = getMovieSingle(id || "");
  const { data: similarData } = getMovieDetail(id || "", "similar");
  const { data: imagesData } = getMovieDetail(id || "", "images");
  const { data: creditsData } = getMovieDetail(id || "", "credits");
  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spin indicator={antIcon} />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <img
            src={data?.backdrop_path ? IMAGE_URL + data.backdrop_path : "/no-image.png"}
            alt={data?.title || "Movie poster"}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-2">{data?.title}</h1>

          <div className="flex items-center gap-4 mb-4">
            <span className="bg-red-600 text-white px-2 py-1 rounded">
              {data?.vote_average ? data.vote_average.toFixed(1) : "N/A"}
            </span>
            <span className="text-gray-500">{data?.release_date?.slice(0, 4)}</span>
            {data?.runtime && (
              <span className="text-gray-500">
                {Math.floor(data.runtime / 60)}h {data.runtime % 60}m
              </span>
            )}
          </div>

          <p className="dark:text-[#f1e5e5] mb-4 max-w-2xl">{data?.overview}</p>

          <p className="mb-2">
            <span className="font-semibold">Genre:</span>{" "}
            {data?.genres?.map((g: any) => g.name).join(", ") || "N/A"}
          </p>

          <p className="mb-2">
            <span className="font-semibold">Country:</span>{" "}
            {data?.production_countries?.map((c: any) => c.name).join(", ") || "N/A"}
          </p>

          {!!data?.budget && (
            <p className="mb-2">
              <span className="font-semibold">Budget:</span>{" "}
              {data?.budget?.toLocaleString()} USD
            </p>
          )}
        </div>
      </div>

     
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
        <div className="flex flex-wrap gap-3">
          {imagesData?.backdrops?.slice(0, 20).map((item: any, inx: number) => (
            <Image
              key={inx}
              width={150}
              src={item.file_path ? IMAGE_URL + item.file_path : "/no-image.png"}
              alt={`Backdrop ${inx + 1}`}
              className="rounded-md shadow-md"
            />
          ))}
        </div>
      </div>

      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Cast</h2>
        <div className="flex overflow-x-auto gap-4 py-4 px-2 scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-red-700 dark:scrollbar-track-gray-800 dark:scrollbar-thumb-red-600">
          {creditsData?.cast?.map((person: any) => (
            <div
              key={person?.id}
              className="w-[150px] flex-shrink-0 bg-white dark:bg-[#111] rounded-lg overflow-hidden shadow hover:scale-105 transition transform duration-200"
            >
              <NavLink to={`/person/${person.id}`}>
                <img
                  src={person?.profile_path ? IMAGE_URL + person.profile_path : "/no-profile.png"}
                  alt={person?.original_name || "Cast member"}
                  className="w-full h-56 object-cover"
                />
              </NavLink>
              <div className="p-2">
                <h3 className="text-sm font-semibold">{person?.original_name}</h3>
                <p className="text-xs text-gray-500">{person?.character}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

     
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Related Movies</h2>
        <MovieView data={similarData?.results?.slice(0, 4)} />
      </div>
    </div>
  );
};

export default MovieDetail;
