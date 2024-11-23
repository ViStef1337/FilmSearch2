import { useEffect, useState } from 'react';
import { getFilmCredits } from '../../services/filmAPI.js';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { filmId } = useParams();
  console.log(filmId);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getFilmCredits(filmId);
        setCast(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <ul>
        {cast.map(item => {
          return (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.character}</p>
              <img src={`https://image.tmdb.org/t/p/w500${item.profile_path}`} alt="" />
            </li>
          );
        })}
      </ul>
    </>
  );
};
