import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../axios";
function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchURL]);

  const img_base_url = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map((movie) => (
          <>
            <img
            key={movie.id}
            src={`${img_base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt=""
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            />
          </>
        ))}
      </div>
    </div>
  );
}

export default Row;
