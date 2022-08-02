import { useEffect, useState } from 'react';
// import { Outlet, Link, useLocation } from 'react-router-dom';
import { fetchTrending } from 'services/moviesAPI';
import MovieList from 'components/MovieList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  // const location = useLocation();

  useEffect(() => {
    fetchTrending().then(setTrendingMovies);
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MovieList movies={trendingMovies} />
    </div>
  );
};

export default Home;
