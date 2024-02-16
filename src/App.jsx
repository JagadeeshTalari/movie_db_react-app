import './App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Footer, Header, Home, MovieDetail, PageNotFound } from './components'

function App() {

  return (
    <div className="app">
    <Router>
      <Header></Header>
      <div className="container">
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/movie/:imdbID" element={<MovieDetail/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  </div>
  )
}

export default App
