
import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import Saved from "./saved/Saved";
import MovieDetail from "./movies/MoviesDetail";
import ActorView from "@/components/actor-view/ActorView";
import Search from "./search/Search";

const Layout = lazy(() => import("./layout/Layout"));
const Home = lazy(() => import("./home/Home"));
const Movies = lazy(() => import("./movies/Movies"));

const MainRouter = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/movies",
          element: <Movies />,
        },
        {
          path: "/saved",
          element: <Saved />,
        },
        {
          path: "/movie/:id",
          element: <MovieDetail />,
        },
        {
          path: "/person/:id",
          element: <ActorView />,
        },
        {
          path: "/search",
          element: <Search />,
        },
      ],
    },
  ]);
};

export default MainRouter;
