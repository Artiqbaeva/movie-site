import React from 'react'
import { useScrollToTop } from "@/hooks/useScrollToTop";
function Saved() {
    useScrollToTop()
  return (
    <div className='container mx-auto mt-18 min-h-[80vh]'>Saved</div>
  )
}

export default React.memo(Saved)