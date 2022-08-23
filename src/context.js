import React, { useCallback, useContext, useEffect, useState } from "react";


const AppContext = React.createContext()
const url = 'https://api.themoviedb.org/3/trending/all/week?api_key=4fa9d7526d953575af29354daf6c0179'
const ur = ' https://api.themoviedb.org/3/discover/movie?api_key=4fa9d7526d953575af29354daf6c0179&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=genre '



const AppProvider = ({children})=>{
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [query,setQuery] = useState('')
    const [indexPage, setIndex] = useState(0);
     const [favourites, setFavourites] = useState([]);

    const fetchData = useCallback( async() =>{
        setLoading(true)

        try{

            const response = await fetch (`${url}&page=${indexPage+1}`)
            const data = await response.json()
            console.log(data)
            setMovies(data.results);
            console.log(data.results)
            setLoading(false)
            
        


        }catch(error){
        console.log(error)
        setLoading(false)
        }

    },[indexPage])

    useEffect(()=>{
        fetchData()
        window.scrollTo(0,0)
    },[indexPage])

      const addToFavourites =(fav) =>{
    if(favourites.includes(fav)){
      return
    }
    
    const favMovies = [...favourites, fav]
    setFavourites(favMovies)
    
    
  }
  const deleteFromFavourites = (del) =>{
    const newMovies = favourites.filter((mov)=>   mov.id!==del.id)
    
    
    setFavourites(newMovies)
  }
   
   
    

    return <AppContext.Provider value={{movies, loading,setLoading, query, setQuery,indexPage,setIndex,fetchData,favourites,addToFavourites,deleteFromFavourites }}>{children}</AppContext.Provider>
}


export const useGlobalContext = () =>   useContext(AppContext)
 

export {AppContext,AppProvider}