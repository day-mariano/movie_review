import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import MovieList from './MovieList'
import MoviePage from './MoviePage'

function App() {
  return (
    <div>
      <header>
        <a id='title' href="/">Movie Review 🍿</a>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MovieList />}/>
          <Route path='/moviepage' element={<MoviePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
