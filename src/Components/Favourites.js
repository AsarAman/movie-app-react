import React from 'react'
import {img_300} from '../config/config'

const Favourites = ({movies,remove,del}) => {
    console.log(movies)
  return (
     <div className='movies'>
      {movies.map((item,index)=>{
        const {title,poster_path,media_type,vote_average,release_date,name,first_air_date} = item
        return (
          <div key={index} className='movie'>
            <div>
              <img src={`${img_300}${poster_path}`} alt={title}></img>
              <p className='title'>{title ? title : name}</p>
              <span className='vote'>{(vote_average).toFixed(1)}</span>
            </div>
            <div className='movie-info'>
              <p className=''>{media_type==="TV" ? 'TV Series':"Movie"}</p>
              <p>{release_date ? release_date : first_air_date }</p>
            
            </div>
            <p onClick={()=> del(item)}>{remove}</p>
            
          </div>
        )
      })}
    </div>
  )
}

export default Favourites