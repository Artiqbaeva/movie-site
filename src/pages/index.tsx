import { lazy } from "react";
import { useRoutes } from "react-router-dom";

const Layout = lazy(() => import("./layout/Layout"));
const Home = lazy(() => import("./home/Home"));
const Movies = lazy(() => import("./movies/Movies"));
const Saved = lazy(() => import("./saved/Saved"));
const MovieDetail = lazy(() => import("./movies/MoviesDetail"));
const ActorView = lazy(() => import("@/pages/actor-view/PersonView"));
const Search = lazy(() => import("./search/Search"));
const Login = lazy(() => import("./login/Login"));

const MainRouter = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/movies", element: <Movies /> },
        { path: "/saved", element: <Saved /> },
        { path: "/movie/:id", element: <MovieDetail /> },
        { path: "/person/:id", element: <ActorView /> },
        { path: "/search", element: <Search /> },
        { path: "/login", element: <Login /> },
      ],
    },
  ]);
};

export default MainRouter;
