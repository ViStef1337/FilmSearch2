import { useEffect, useState } from 'react';
import { getFilms } from '../services/filmAPI.js';
import { FilmsList } from '../components/FilmsList/FilmsList.jsx';

export const HomePage = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getFilms();
        setFilms(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return <FilmsList films={films} />;
};
