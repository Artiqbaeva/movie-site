import MainRouter from "./pages";
import Suspense from '@/utils/index'

const App = () => {
  return (
    <div className="dark:bg-black dark:text-white ">
      <Suspense >
        <MainRouter />
      </Suspense>
    </div>
  );
};

export default App;