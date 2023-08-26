function MovieItem(filme) {
  return (
     <li>
        <h3 className="movieName"> {filme.nome} </h3>
        <h4 className="movieVote"> ⭐️{filme.nota} </h4>
        <img src={"https://www.themoviedb.org/t/p/w220_and_h330_face" + filme.poster} alt={filme.nome} />
     </li>
  )
}

export default MovieItem;