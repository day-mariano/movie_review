import './App.css'

function App() {
  return (
    <div>
      <h1>Movie Review ⭐️</h1>
      <p>Welcome to Movie Review, your page to rate movies and read reviews</p>
      <MyList />
    </div>
  )
}

function MyList() {
  return (
    <ul>
      <MovieItems />
    </ul>
  );
}
export default App

function MovieItems() {
  return (
     <li>
       <div className="divImage"></div>
       <div>
         <h2 className="movieName" >Barbie</h2>
       </div>
     </li>
  )
}
