import { Link, useLocation } from 'react-router-dom';

export const FilmsList = ({ films }) => {
  const location = useLocation();
  return (
    <ul>
      {films.map(item => {
        return (
          <li key={item.id}>
            <Link state={location} key={item.id} to={`/film/${item.id}`}>
              <p>{item.original_title}</p>
              <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
