import MovieItems from './MovieItems';
import StarRater from './StarRater';
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
      .then((json) => console.log(json.results[2]))
      .then(movieList => setMovieList(movieList)) // Update the state with fetched data
      .catch((err) => console.error("error:" + err));
  }, []);

  return (
    <ul className="List">
      <li>
        li from movieList function
        {movieList ? (
          <pre>{JSON.stringify(movieList.results[1], 2)}</pre>
        ) : (
          <p>Loading movie list...</p>
        )}
        <StarRater />
      </li>
      {/* { {movieList.slice.map((movie) => {

        <li key={movie.id}>
          <div>
            <h2 className="movieName">{movie.name}</h2>
            <StarRater />
          </div>
        </li>

      }
      )}}  */}
      <MovieItems />
      <MovieItems />
      <MovieItems />
    </ul>
  );
}

export default MovieList;
