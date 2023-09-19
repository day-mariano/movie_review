/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

function MovieItem(props) {
  const filme = props.filme;
  
  return (
    <Link to={{
      pathname: '/movie/' + filme.id,
    }} state={filme}>
      <li>
      <img src={"https://www.themoviedb.org/t/p/w220_and_h330_face" + filme.poster_path} alt={filme.title} />
      <div className="movieInfo">
        <h4 className="movieName"> {filme.title} </h4>
        <p className="movieVote"> ⭐️ {filme.vote_average} </p>
      </div>
      </li>
    </Link>
  )
}

export default MovieItem; 