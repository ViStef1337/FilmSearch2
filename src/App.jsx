import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { FilmInfo } from './pages/FilmInfo.jsx';
import { SearchFilm } from './pages/SearchFilm.jsx';
import { Cast } from './components/Cast/Cast.jsx';
import { Reviews } from './components/Reviews/Reviews.jsx';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="searchFilm" element={<SearchFilm />} />
        <Route path="film/:filmId" element={<FilmInfo />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
