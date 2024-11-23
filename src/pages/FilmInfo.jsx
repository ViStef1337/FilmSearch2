import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getFilmById } from '../services/filmAPI.js';

export const FilmInfo = () => {
  const { filmId } = useParams();
  const [filmInfo, setFilmInfo] = useState(null);
  const location = useLocation();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getFilmById(filmId);
        setFilmInfo(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [filmId]);
  return (
    <>
      <Link to={location.state || '/'}>go back</Link>
      {filmInfo && (
        <>
          <h1>{filmInfo.title}</h1>
          <div>
            <img src={`https://image.tmdb.org/t/p/w500${filmInfo.poster_path}`} alt="" />
            <div>
              <p>overview : {filmInfo.overview}</p>
              <p>release_date : {filmInfo.release_date}</p>
              <p>Ganres</p>
              <ul>
                {filmInfo.genres.map(item => {
                  return (
                    <li key={item.id}>
                      <p>{item.name}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </>
      )}
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </>
  );
};
