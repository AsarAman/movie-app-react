import React,{useState} from 'react'
import {BiMoviePlay} from 'react-icons/bi'
import {BiCameraMovie} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import {FaBars,FaTimes} from 'react-icons/fa'
const  Header  = () => {
  const [nav,setnav] = useState(false)
  const links = [
    {
      id: 1,
      link: 'Trending',
      path: '/'
    },
    {
      id: 2,
      link: 'Movies',
      path: 'movies'
    },
    {
      id: 3,
      link: 'Series',
      path: 'series'
    },
    {
      id: 4,
      link: 'Search',
      path:'search'
    },
  ];
  return (
    <div className=" flex w-full justify-between items-center text-white mt-4   ">
      <h1>ENTERTAINMENT HUB</h1>
      <nav className="hidden md:flex">
        <ul className=" flex items-center justify-between gap-5  ">
          {links.map(({ id, link, path }) => {
            return (
              <li key={id} className='bg-indigo-700 px-3 py-2 rounded-md'>
                <Link to={path}>{link}</Link>
              </li>
            );
          })} 
        </ul>
      </nav>
      <div
        onClick={() => setnav(!nav)}
        className="cursor-pointer z-10   pr-4 md:hidden"
      >
      <button> { nav ? <FaTimes className='z-10' color="black" size={30}/>: <FaBars size={30} className='z-10' />}</button>
      </div>
      {nav && (
        <ul className="flex justify-center flex-col bg-none items-center absolute top-0 left-0 w-full h-screen text-black text-bold bg-white z-10">
          {links.map(({ id, link, path }) => {
            return (
              <li
                className="px-4 cursor-pointer py-6 capitalize text-4xl hover:scale-105 duration-75"
                key={id} onClick={()=> setnav(false)}
              >
                <Link to={path}>{link}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
  }
export default  Header 
