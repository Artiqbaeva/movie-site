import React from 'react'
import { useScrollToTop } from "@/hooks/useScrollToTop";
const Search = () => {
    useScrollToTop()
  return (
    <div className='container mx-auto mt-18 min-h-[80vh]'>Search</div>
  )
}

export default React.memo(Search)