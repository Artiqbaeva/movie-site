import { Suspense } from "react";
import MainRouter from "./pages";

const App = () => {
  return (
    <div className="dark:bg-black dark:text-white ">
      <Suspense fallback={<p className="flex items-center justify-center">Loading...</p>}>
        <MainRouter />
      </Suspense>
    </div>
  );
};

export default App;