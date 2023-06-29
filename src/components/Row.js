import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../axios";
import { useDispatch } from "react-redux";
import { movie } from "../features/movieSlice";
// import Loading from "./Loading";
function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [info, setInfo] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    
    fetchData();
  }, [fetchURL]);


  const infoHandler = (e) => {
    // setInfo(JSON.parse(e.target.dataset.value));
    // console.log(info)
    dispatch(
      movie({
        ...JSON.parse(e.target.dataset.value) 
      })
    )
  }

  const img_base_url = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map((movie, i) => {
          // console.log(movie)
          return <>
            <img
            onClick={infoHandler}
            data-value= {JSON.stringify(movie)}
            key={movie.id}
            src={`${img_base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt=""
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            />
          </>
        })}
      </div>
    </div>
  );
}

export default Row;
