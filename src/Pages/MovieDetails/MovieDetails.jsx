import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { MovieDetails } from 'moviesAPI';
import MovieCard from 'components/MovieCard/MovieCard';
import { GoBackLink, CastLink, ReviewsLink } from './MovieDetails.styled';

const MyMovieDetails = () => {
  const location = useLocation();
  const [movieDetails, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchMovieDetails = async movieId => {
      try {
        const movieDetails = await MovieDetails(movieId);
        setMovieDetails(movieDetails);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieDetails(movieId);
  }, [movieId]);

  return (
    <>
      <GoBackLink to={backLinkLocationRef.current}>Go Back</GoBackLink>
      {loading && <p>Loading...</p>}

      <MovieCard movieDetails={movieDetails} />
      <ul>
        <li>
          <CastLink to="cast">Cast</CastLink>
        </li>
        <li>
          <ReviewsLink to="reviews">Reviews</ReviewsLink>
        </li>
      </ul>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MyMovieDetails;
