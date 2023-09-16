import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieReviews } from 'moviesAPI';
import { ReviewsContainer } from './Reviews.styled'; 

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async movieId => {
      try {
        const { results } = await MovieReviews(movieId);
        setReviews(results);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovieReviews(movieId);
  }, [movieId]);

  return (
    <ReviewsContainer>
      {reviews.length === 0 ? (
        <p>Any reviews for this movie.</p>
      ) : (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content ?? 'Any reviews for this movie.'}</p>
            </li>
          ))}
        </ul>
      )}
    </ReviewsContainer>
  );
};

export default Reviews;
