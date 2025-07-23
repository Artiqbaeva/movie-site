import React from "react";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { useStore } from "@/zustand/useStore";
import MovieView from "@/components/movie-view/MovieView";

function Saved() {
  useScrollToTop();
  const { saved} = useStore();
 
 


  console.log(saved);
  
  return (
   <div className="container mx-auto min-h-screen pt-22 px-1">
      <h1 className="text-2xl font-bold mb-4">Saved Movies</h1>
      <MovieView data={saved}/>
    
   </div>
  );
}

export default React.memo(Saved);