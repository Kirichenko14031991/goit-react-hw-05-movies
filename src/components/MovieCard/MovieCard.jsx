import React from 'react';
import {
  CardContainer,
  PosterImage,
  DetailsContainer,
  Title,
  Score,
  Overview,
  Genres,
} from './MovieCard.styled';

const MovieCard = ({ movieDetails }) => {
  const { poster_path, title, vote_average, overview, genres, name } =
    movieDetails;

  const getGenres = () => {
    return genres?.map(({ name }) => name).join(' ');
  };

  const defaultImg = 'https://via.placeholder.com/300x450?text=Not+Found';

  const userScore = vote_average ? `${Math.round(vote_average * 10)}%` : '';

  return (
    movieDetails && (
      <CardContainer>
        <PosterImage
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w400/${poster_path}`
              : defaultImg
          }
          width={300}
          alt="poster"
        />
        <DetailsContainer>
          <Title>{title || name}</Title>
          <Score>User Score: {userScore}</Score>
          <Overview>Overview</Overview>
          <p>{overview}</p>
          <Genres>Genres</Genres>
          <p>{getGenres()}</p>
        </DetailsContainer>
      </CardContainer>
    )
  );
};

export default MovieCard;
