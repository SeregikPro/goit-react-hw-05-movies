import { useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { searchMovies } from 'services/moviesAPI';
import SearchBox from 'components/SearchBox';
import MovieList from 'components/MovieList';
import Box from 'components/Box';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const query = searchParams.get('query');

    if (query) {
      searchMovies(query).then(setMovies);
    }
  }, [searchParams]);

  const handleSearchChange = event => {
    event.preventDefault();
    const query = event.target.elements.query.value.trim().toLowerCase();

    setSearchParams(query !== '' ? { query } : {});
  };

  return (
    <div>
      <h2>Movies</h2>
      <Box>
        <SearchBox onSubmit={handleSearchChange} />
        {movies.length > 0 && (
          <MovieList movies={movies} state={{ from: location }} />
        )}
      </Box>
    </div>
  );
};

export default Movies;
