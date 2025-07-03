
import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import Saved from "./saved/Saved";

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
        // {
        //   path: "/search",
        //   element: <Search />,
        // },
      ],
    },
  ]);
};

export default MainRouter;
