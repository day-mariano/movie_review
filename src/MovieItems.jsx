import StarRater from './StarRater'

function MovieItems() {
  return (
     <li>
       <div className="divImage"></div>
       <div>
         <h2 className="movieName">Barbie</h2>
         <StarRater />
       </div>
     </li>
  )
}

export default MovieItems;