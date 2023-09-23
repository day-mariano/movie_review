import { useLocation } from "react-router-dom";
import { useEffect ,useState } from 'react'
import './moviePage.css'

function getLanguageFlag(countryCode) {
  switch (countryCode) {
    case "en": return "🇺🇸";
    case "pt": return "🇧🇷";
    default: return countryCode;
  }
}

function MoviePage() {
  const location = useLocation()
  const [moviePage, setMoviePage] = useState(null);

  const filme = location.state

  useEffect(() => {
    if (!filme) {
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
      .then(json => setMoviePage(json)) // Update the state with fetched data
      .catch((err) => console.error("error:" + err));
    }
  }, [filme])

  return filme ? (
    <div>
      <h2>Movie info 🎬</h2>
      <div className="moviePageSection">
        <div>
        <img src={"https://www.themoviedb.org/t/p/w220_and_h330_face" + filme.poster_path} alt={filme.title}/>
        </div>
        <div className="moviePageInfos">
          <h3>{filme.title}</h3>
          <p><b>🎞 Overview:</b> {filme.overview}</p>
          <p><b>📅 Release date:</b> {filme.release_date}</p>
          <p><b>👥 Popularity:</b> {filme.popularity}</p>
          <p><b>🎙 Original language:</b> {getLanguageFlag(filme.original_language)}</p>
          <p><b>⭐️ Vote average:</b> {filme.vote_average}</p>
        </div>
      </div>
    </div>
  ) : (
    <p>Carregando...</p>
  )
}

export default MoviePage;