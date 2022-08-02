import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
// import { List } from './MovieList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.length > 0 &&
        movies.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MovieList;
