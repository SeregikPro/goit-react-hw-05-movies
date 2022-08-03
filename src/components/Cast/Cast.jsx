import Box from 'components/Box';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast, API_IMG_URL } from 'services/moviesAPI';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState();

  useEffect(() => {
    if (movieId) {
      fetchMovieCast(movieId)
        .then(setMovieCast)
        .catch(error => console.log(error));
    }
  }, [movieId]);

  return (
    <>
      {movieCast && (
        <Box
          display="grid"
          gridGap="20px"
          gridTemplateColumns="repeat(auto-fit, 200px)"
          as="ul"
          p="30px"
        >
          {movieCast.cast.map(
            ({ id, name, profile_path: profileImg, character }) => {
              return (
                <li key={id}>
                  <img src={API_IMG_URL + profileImg} alt={name} width={100} />
                  <div>{name}</div>
                  <p>Character: {character}</p>
                </li>
              );
            }
          )}
        </Box>
      )}
    </>
  );
};

export default Cast;
