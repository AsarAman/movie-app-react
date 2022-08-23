
import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context';
import { img_300 } from '../config/config';
import Movie from '../Components/Movie';
import Pagination from '../Components/Pagination';
import SingleContent from '../Components/SingleContent';
import {Link} from 'react-router-dom'
import AddToFavourite from '../Components/AddToFavourite';

import SingleMovie from './SingleMovie';

const API_key = '4fa9d7526d953575af29354daf6c0179'
const url = 'https://api.themoviedb.org/3/discover/movie?api_key=&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=&with_genres='

const Movies = () => {
    const {indexPage,favourites,addToFavourites,loading} = useGlobalContext()
    


    const [movies, setMovies] = useState([]);
    const [genres, setgenres] = useState ('romance');
    const [selectedGenres, setSelectedGenres] = useState([])



    const fetchMovies = async()=>{
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${indexPage+1}&with_genres=${genres}`
        )
        const data = await response.json()
        console.log(data);
        setMovies(data.results)
    }
    console.log(movies)
    useEffect(()=>{
      
        fetchMovies()
        window.scrollTo(0,0)
        
    }, [indexPage,genres])
  return (
    <>
    
     <div className='movies'>
      
      {movies.map((item,index)=>{
        const {title,poster_path,media_type,vote_average,release_date,name,first_air_date,id} = item
        return ( 
          
          
          <Link key={index} to={`movies/${id}`}>
          <SingleContent {...item}/>
          </Link>
          
          
       
          
        )
      })}
      
    </div>
  { !loading && <Pagination/>}
    </>
    
   
  )
}

export default Movies