import MovieItem from './MovieItem';
import { useEffect, useState } from "react";

function MovieList() {
  const [movieList, setMovieList] = useState(null);

  useEffect(() => {
    // The URL of the API you I to fetch data from
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
    // Fetch data from the API
    fetch(url, options)
      .then((res) => res.json()) // Parse the response as JSON
      .then(json => setMovieList(json)) // Update the state with fetched data
      .catch((err) => console.error("error:" + err));
  }, []);

  return (
    <ul className="List">
        {movieList ? movieList.results.map((filme) => (
          <MovieItem key={filme.id} nome={filme.title} rating={filme.vote_average} />
        )) : (
          <p>Loading movie list...</p>
        )}
    </ul>
  );
}

export default MovieList;