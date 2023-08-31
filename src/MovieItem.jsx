function MovieItem(filme) {
  return (
     <li>
        <img src={"https://www.themoviedb.org/t/p/w220_and_h330_face" + filme.poster} alt={filme.nome} />
        <div className="movieInfo">
          <h3 className="movieName"> {filme.nome} </h3>
          <h4 className="movieVote"> ⭐️ {filme.nota} </h4>
          <a href="moviePage.jsx">More information</a>
        </div>
     </li>
  )
}

export default MovieItem;