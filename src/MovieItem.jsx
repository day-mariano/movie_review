import StarRater from './StarRater'

function MovieItem(filme) {
  return (
     <li>
         <h3 className="movieName"> {filme.nome} </h3>
         <StarRater />
     </li>
  )
}

export default MovieItem;