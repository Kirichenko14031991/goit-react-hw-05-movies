import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieCredits } from 'moviesAPI';
import { CastContainer } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieCredits = async movieId => {
      try {
        const { cast } = await MovieCredits(movieId);
        setCast(cast);
      } catch (error) {
        console.error('Помилка:', error);
      }
    };
    fetchMovieCredits(movieId);
  }, [movieId]);

  return (
    <CastContainer>
      {cast.length === 0 ? (
        <p>Any casts for this movie.</p>
      ) : (
        <ul>
          {cast.map(({ id, profile_path, name, character }) => {
            const imagePath =
              profile_path && `https://image.tmdb.org/t/p/w400${profile_path}`;
            return (
              <li key={id}>
                {imagePath && <img src={imagePath} alt={name} width="100" />}
                <h3>{name}</h3>
                <p>Character: {character ?? 'Any casts for this movie.'}</p>
              </li>
            );
          })}
        </ul>
      )}
    </CastContainer>
  );
};

export default Cast;
