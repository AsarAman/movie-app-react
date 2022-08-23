import React from "react";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Favourite from "./Pages/Favourite";

import {BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom'
import Movies from "./Pages/Movies";
import TvSeries from "./Pages/TvSeries";
import SingleMovie from "./Pages/SingleMovie";
import Search from "./Pages/Search";


function App() {
  return(
    
    
      <>
      
    
    <div className="container">
      
      <BrowserRouter>
      
      <Header/>
      
      <Routes className=''>
        <Route path='/' element={<Home/>}></Route>
        <Route path="movies" element={<Movies/>}></Route>
        
        <Route path="series" element={<TvSeries/>}></Route>
        <Route path="movies/:id" element={<SingleMovie/>}></Route>
        <Route path="search" element={<Search/>}></Route>
        <Route path="series/series/:id" element={<SingleMovie/>}></Route>
        <Route path="movies/movies/:id" element={<SingleMovie/>}></Route>
        <Route path="search/search/:id" element={<SingleMovie/>}></Route>
        
        
        
        
        
      </Routes>
      
      </BrowserRouter>
     

     {/* <Home/>
     <Favourite/> */}
    
    
    
    
    </div>
    </>
    

  );
  
}

export default App;
