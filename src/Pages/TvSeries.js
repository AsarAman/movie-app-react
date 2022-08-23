import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context'
import Pagination from '../Components/Pagination'
import { img_300 } from '../config/config'
import {Link} from 'react-router-dom'
import SingleContent from '../Components/SingleContent'
import SingleMovie from './SingleMovie'
import Loading from '../Components/Loading'
const API_KEY = '4fa9d7526d953575af29354daf6c0179'

const u =
  "https://api.themoviedb.org/3/discover/tv?api_key=<<api_key>>&language=en-US&sort_by=popularity.desc&page=1&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0";


const url='https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${}&with_genres=$'
const TvSeries = () => {
    const {indexPage,loading,setLoading} = useGlobalContext();
    const [genre, setgenre] = useState()
    const [series, setSeries] = useState([])
    

    const fetchSeries = async()=>{
      setLoading(true)
         const response = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${indexPage+1}&with_genres=${genre}`)
        
    const data = await response.json()

    console.log(data)
    setSeries(data.results)
    setLoading(false)
    
    }
    useEffect(()=>{
      
        fetchSeries();
        window.scrollTo(0,0)
    },[indexPage])

if(loading){
  return <Loading/>
}
  return (
     <>
    
     <div className='movies'>
      {series.map((item,index)=>{
        const {title,poster_path,media_type,vote_average,release_date,name,first_air_date,id} = item
        return (
          // <Link key={id} to={`series/${id}`}>
          // <SingleContent {...item} />
          // </Link>
          <Link to={`series/${id}`} key={index} className='movie'>
            <div>
              <img src={`${img_300}${poster_path}`} alt={title}></img>
              <p className='title'>{title ? title : name}</p>
              <span className='vote'>{(vote_average).toFixed(1)}</span>
            </div>
            <div className='movie-info'>
              <p>{'Series'}</p>
              <p>{release_date ? release_date : first_air_date }</p>
            
            </div>
            
            
          </Link>
          
        )
      })}
      
    </div>
    { !loading &&
    <Pagination/>
}
    </>
    
    
  )
}

export default TvSeries