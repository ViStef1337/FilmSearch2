import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="searchFilm">Search film</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
