import React, { useState } from 'react'
import { useGlobalContext } from '../context'
import Loading from './Loading'
import Movie from './Movie'

import Pagination from './Pagination'

const Movies = () => {
  const {movies,loading} = useGlobalContext();
 

  
  
  if(loading){
    return <Loading/>
  }
  return(
    <main>
    <div className=''>
      <Movie movies={movies} />
    </div>
    <div>
      <Pagination/>
    </div>
    <div>
      
      

    </div>
    </main>
  )
 
  
}

export default Movies