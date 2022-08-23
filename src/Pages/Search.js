import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import SingleMovie from "./SingleMovie";
import { Link } from "react-router-dom";
import { img_300 } from "../config/config";
import Pagination from "../Components/Pagination";
import Loading from '../Components/Loading'



import SingleContent from "../Components/SingleContent";
import { TextField } from "@mui/material";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

import Button from "@mui/material/Button";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";



const url =
  "https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false";

const API_key = "4fa9d7526d953575af29354daf6c0179";
const Search = () => {
    
  const [query, setQuery] = useState("batman");
  const [type, setType] = useState(0);
  const { indexPage,loading,setLoading } = useGlobalContext();
  const [data, setData] = useState([]);
  const [pages,setPages] = useState()

  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });

  const fetchdata = async () => {
    setLoading(true)
    const response = await fetch(
      `https://api.themoviedb.org/3/search/${
        type ? "tv" : "movie"
      }?api_key=${API_key}&language=en-US&query=${query}&page=${
        indexPage + 1
      }&include_adult=false`
    );
    const data = await response.json();
    console.log(data);
    setData(data.results);
    
    setPages(data.total_pages)
    console.log(pages)
    setLoading(false)
  };
  useEffect(() => {
    fetchdata();
    window.scrollTo(0,0)
  }, [query, type,indexPage]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
 

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <div style={{ display: "flex", margin: "15px 0", TextColor:'#fff' }}>
          <TextField
            style={{ flex: 1 }}
            className="searchbox"
            label="Search"
            varient="filled"
            onChange={(e) => setQuery(e.target.value)}
            inputProps={{style:{color:'white'} }}
            
            
          />
          <Button variant="contained" style={{ marginLeft: "5px" }} onClick={fetchdata}>
            <SearchOutlinedIcon />
          </Button>
        </div>
        <Tabs
          value={type}
          indicatorColor="primary"
          textColor="primary"
          onChange={(event, newvalue) => {
            setType(newvalue);
          }}
          style={{ paddingBottom: 5 }}
        >
          <Tab
            style={{ width: "50%", color: "#fff" }}
            label="Search movies"
          ></Tab>
          <Tab
            style={{ width: "50%", color: "#fff" }}
            label="Search Series"
          ></Tab>
        </Tabs>
      </ThemeProvider>
      <div className="movies">
        {data.map((item) => {
          const {
            title,
            poster_path,
            media_type,
            vote_average,
            release_date,
            name,
            first_air_date,
            id,
          } = item;
          return (
            <Link to={`search/${id}`} key={id} className="movie">
              <div>
                <img src={`${img_300}${poster_path}`} alt={title}></img>
                <p className="title">{title ? title : name}</p>
                <span className="vote">{vote_average.toFixed(1)}</span>
              </div>
              <div className="movie-info">
                <p className="">
                  {type === 0 ? 'Movies' :'Series' }
                </p>
                <p>{release_date ? release_date : first_air_date}</p>
              </div>
            </Link>
          );
        })}
      </div>
      {!loading && pages >1 && <Pagination/>}
    </div>
  );
};

export default Search;
