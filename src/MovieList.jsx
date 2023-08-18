import MovieItems from './MovieItems'

function MovieList() {
  const [movies,setMovies] = useState([])

  useEffect(() => {
    const fetch = require('node-fetch');

    const url = 'https://api.themoviedb.org/3/account/null/favorite/movies?language=en-US&page=1&sort_by=created_at.asc';
    const options = {method: 'GET', headers: {accept: 'application/json'}};

    fetch(url, options)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.error('error:' + err));
  })

  return (
    <ul className='List'>
      <MovieItems />
      <MovieItems />
      <MovieItems />
    </ul>
  );
}

export default MovieList;