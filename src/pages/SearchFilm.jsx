import { SearchFilmForm } from '../components/SearchFilmForm/SearchFilmForm.jsx';
import { useEffect, useState } from 'react';
import { getSearchFilm } from '../services/filmAPI.js';
import { FilmsList } from '../components/FilmsList/FilmsList.jsx';
import { useSearchParams } from 'react-router-dom';

export const SearchFilm = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [filmList, setFilmList] = useState([]);
  useEffect(() => {
    const film = searchParams.get('filmName');
    if (!film) {
      return;
    }
    async function fetchData() {
      try {
        const data = await getSearchFilm(film);
        setFilmList(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [searchParams]);
  const search = filmName => {
    setSearchParams({ filmName });
  };
  return (
    <>
      <SearchFilmForm search={search} />
      <FilmsList films={filmList} />
    </>
  );
};
