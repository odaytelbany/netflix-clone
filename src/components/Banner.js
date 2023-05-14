import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../axios";
import requests from "../request";
import { useSelector } from "react-redux";
import { selectMovie } from "../features/movieSlice";

function Banner() {
  const [movie, setMovie] = useState([]);
  const movieInfo = useSelector(selectMovie);


  useEffect(() => {
    async function fetchData () {
      const request = await axios.get(requests?.fetchNetflixOriginals);
      // console.log(request);
      setMovie(
        request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
      )

      return request;
    }

    fetchData()
  }, [])



  function truncate(string, n){
    return string.length > n ? string.substring(0,n-1)+"..." : string
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movieInfo?.backdrop_path || movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center"
      }}
    >


        <div className="banner_content">
            <h1 className="banner_title">{movieInfo?.name || movieInfo?.title || movieInfo?.original_name || movie?.title || movie?.name || movie?.original_name}</h1>
            <div className="banner_buttons">
                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>
            </div>
            <h1 className="banner_description">{
              truncate(`${movieInfo?.overview || movie?.overview}`, 150)
            }</h1>
        </div>

        <div className="banner_fadeBottom" />
    </header>
  );
}

export default Banner;
