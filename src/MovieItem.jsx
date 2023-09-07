function MovieItem(filme) {
  return (
    <a href="/moviepage">
      <li>
      <img src={"https://www.themoviedb.org/t/p/w220_and_h330_face" + filme.poster} alt={filme.nome} />
      <div className="movieInfo">
        <h4 className="movieName"> {filme.nome} </h4>
        <p className="movieVote"> ⭐️ {filme.nota} </p>
      </div>
      </li>
    </a>
  )
}

export default MovieItem;