import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import MovieList from './MovieList'
import MoviePage from './MoviePage'

function App() {
  return (
    <div className='page'>
      <div className='content'>
        <header> <a id='title' href="/"> Movie Review 🍿 </a> </header>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MovieList />}/>
            <Route path='/movie/:rg' element={<MoviePage />} />
          </Routes>
        </BrowserRouter>
      </div>
      <footer>Created by Dayana Mariano 2023</footer>
    </div>
  )
}

export default App
