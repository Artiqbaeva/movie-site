import { useMovie } from '@/api/hooks/useMovie'
import React from 'react'
import MovieView from '@/components/movie-view/MovieView'
import Hero from '@/components/hero/Hero'
import go from '@/assets/go.svg'
import { useNavigate } from 'react-router-dom'
import SkeletonCard from '@/components/skeleton/SkeletonCard' 

const Home = () => {
  const navigate = useNavigate()
  const { getMovies } = useMovie()
  const { data, isLoading } = getMovies({
    page: 1,
    without_genres: "18,36,27,10749"
  })

  return (
    <div className='container mx-auto min-h-[80vh]'>
      <Hero />
      <div
        className='flex items-center justify-end mb-5 mt-5 gap-3 cursor-pointer'
        onClick={() => navigate('/movies')}
      >
        <p className='text-red-600'>Show all</p>
        <img src={go} alt="" />
      </div>
      <MovieView
        data={data?.results?.slice(0, 4)}
        loading={isLoading}
        SkeletonComponent={<SkeletonCard />} 
      />
    </div>
  )
}

export default React.memo(Home)
