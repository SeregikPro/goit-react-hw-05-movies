import { fetchMovie, API_IMG_URL } from 'services/moviesAPI';
import { useEffect, useState, Suspense } from 'react';
import {
  Link,
  Outlet,
  useParams,
  useLocation,
  useNavigate,
  Navigate,
} from 'react-router-dom';
import Box from 'components/Box';

const MovieDetails = () => {
  const [movieData, setMovieData] = useState();
  const { movieId } = useParams();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovie(movieId).then(setMovieData);
  }, [movieId]);

  if (movieData === undefined) {
    return;
  }
  if (movieData === null) {
    return <Navigate to="/not-found" replace={true} />;
  }

  const { title, poster_path, genres, vote_average, overview } = movieData;

  return (
    <Box>
      {movieData && (
        <Box>
          <button
            type="button"
            onClick={() => navigate(location?.state?.from ?? '/')}
          >
            Go back
          </button>
          <div>
            <img src={`${API_IMG_URL}${poster_path}`} alt="movie poster" />
            <div>
              <h2>{title}</h2>
              <p>
                User score: <b>{vote_average}</b>
              </p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Genres</h3>
              <p>
                {genres.map(({ id, name }) => (
                  <span key={id}>{name}</span>
                ))}
              </p>
            </div>
          </div>
          <Box>
            <h3>Additional information</h3>
            <p>
              <Link to="cast" state={{ from: location.state?.from }}>
                Cast
              </Link>
            </p>
            <p>
              <Link to="reviews" state={{ from: location.state?.from }}>
                Reviews
              </Link>
            </p>
          </Box>
          <Suspense fallback={<section>Loading...</section>}>
            <Outlet />
          </Suspense>
        </Box>
      )}
    </Box>
  );
};

export default MovieDetails;
