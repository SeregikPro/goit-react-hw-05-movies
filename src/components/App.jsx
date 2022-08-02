import Home from 'pages/Home';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="movies" element={<Movies />}>
          <Route path=":movieId" element={<MovieDetails />} />
        </Route>
        <Route path="movies/:movieId/cast" element={<Cast />} />
        <Route path="movies/:movieId/reviews" element={<Reviews />} />
        <Route path="*" element={<NotFoundView />} /> */}
      </Route>
    </Routes>
  );
};
