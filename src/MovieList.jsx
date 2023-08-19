import MovieItems from './MovieItems';
import StarRater from './StarRater';
import { useEffect, useState } from "react";

function MovieList() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmZiMDY2MWZjYTMzMWNiMmVjNTI1MjE5NzFiNzM0YSIsInN1YiI6IjY0ZGZiM2Q2Yjc3ZDRiMTEzZTA2ZjA1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._Vz6nPOTmyHIPTH_KS1TuA4Ju983AoOkxTn4iqX1uMI",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => console.log(json))
      .then((movieList) => {
        setMovieList(movieList)
      })
      .catch((err) => console.error("error:" + err));
  }, []);

  return (
    <ul className="List">
      <MovieItems />
      <MovieItems />
      <MovieItems />
    </ul>
  );
}

export default MovieList;
