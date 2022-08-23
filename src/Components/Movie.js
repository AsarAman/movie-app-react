import React, { useState } from 'react'
import {img_300} from '../config/config'
import {Link} from 'react-router-dom'
import SingleContent from './SingleContent'
import { useGlobalContext } from '../context'
import AddToFavourite from './AddToFavourite'


const Movie = ({movies}) => {

  const {favourites, addToFavourites} = useGlobalContext()
  console.log(movies)

  
   
      
  return (
    
    <div className='movies'>
      {movies.map((item,index)=>{
        const {title,poster_path,media_type,vote_average,release_date,name,first_air_date,id} = item
        return (
        <div key={index}>
          <Link to={`movies/${id}`}>
          <SingleContent{...item} key={index} />
          </Link>
          <p><AddToFavourite/></p>
          
          </div>
        
          
          
        )
      })}
    </div>
    
   
    
     
    
  )
}

export default Movie