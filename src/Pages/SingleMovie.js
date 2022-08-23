import React, { useEffect,useState,usestate } from 'react'
import { img_300 } from '../config/config'
import {Link} from 'react-router-dom'
import {BsYoutube} from 'react-icons/bs'

import {useParams} from 'react-router-dom'


const url='https://api.themoviedb.org/3/find/{external_id}?api_key=4fa9d7526d953575af29354daf6c0179&language=en-US&external_source=imdb_id'
const SingleMovie = () => {
  
  const [loading, setLoading] = useState(false)
  const [movie,setMovie] = useState()
  const [video,setVideo] = useState()
  const [type,setType] = useState('movie')
    const {id} = useParams();
    console.log(id)
    const fetchMovie = async()=>{
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=4fa9d7526d953575af29354daf6c0179&language=en-US`
        );
        
   const data = await response.json()
   console.log(data)
  
   setMovie(data)
  
 
  

   
    }
    const fetchVideo = async () =>{
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=4fa9d7526d953575af29354daf6c0179&language=en-US`)
      const data = await response.json()
      console.log(data)
      setVideo(data.results[0]?.key)

    }
    
    useEffect(()=>{
        fetchMovie();
        fetchVideo();
    },[])

  return (
    <div>
      <Link to="/" className="back">
        Back To Movies
      </Link>
      {movie && (
        <div className="single-movie">
          <img
            src={
              movie.poster_path ? `${img_300}/${movie.poster_path}` : "no-image"
            }
          ></img>
          <div>
            <span className="movie-title">
              {movie.title || movie.name}(
              {(
                movie.first_air_date ||
                movie.release_date ||
                "------"
              ).substring(0, 4)}
              )
            </span>
            <p className="movie-tagline">{movie.tagline}</p>
            <p className="movie-overview mb-5">{movie.overview}</p>
            <a
              className="text-white bg-indigo-600 px-2 py-3 rounded-lg text-center mt-4"
              target="_blank"
              href={`https://www.youtube.com/watch?v=${video}`}
            >
              {" "}
              play the trailer
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleMovie