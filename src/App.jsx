import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import MovieList from './MovieList'
import MoviePage from './MoviePage'

function App() {
  return (
    <div>
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
