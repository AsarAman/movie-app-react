import React from 'react'
import { img_300,img_500 } from '../config/config'
import {Link} from 'react-router-dom'
import AddToFavourite from './AddToFavourite'

const SingleContent = ({title,poster_path,media_type,vote_average,release_date,name,first_air_date,id,add}) => {
  return (
    <div>
      {/* <div key={id} className='movie'>
             <div>
             <img src={`${img_300}${poster_path}`} alt={title}></img>
               <p className='title'>{title ? title : name}</p>
               <span className='vote'>{(vote_average).toFixed(1)}</span>
             </div>
             <div className='movie-info'>
               <p className=''>{media_type==="TV" ? 'TV Series':"Movie"}</p>
               <p>{release_date ? release_date : first_air_date }</p>
            
            </div>
            
            
           </div> */}
      <div to={`movies/${id}`} key={id} className="movie">
        <div>
          <img
            src={
              `${img_300}${poster_path}`
                ? `${img_300}${poster_path}`
                : `${img_300}${poster_path}`
            }
            alt={title}
          ></img>
          <p className="title">{title ? title : name}</p>
          <span className="vote">{vote_average.toFixed(1)}</span>
        </div>
        <div className="movie-info">
          <p className="">{media_type === "tV" ? "TV Series" : "Movie"}</p>
          <p>{release_date ? release_date : first_air_date}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleContent