import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  background-color: blue;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  margin-bottom: 20px;
`;

export const PosterImage = styled.img`
  max-width: 300px;
  height: auto;
  object-fit: cover;
`;

export const DetailsContainer = styled.div`
  padding: 20px;
  flex-grow: 1;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin: 0;
  color: black;
`;

export const Score = styled.h3`
  font-size: 18px;
  margin: 10px 0;
`;

export const Overview = styled.p`
  font-size: 24px;
  margin: 10px 0;
  color: black;
`;

export const Genres = styled.p`
  font-size: 20px;
  margin: 10px 0;
  color: black;
`;

export const NotFoundImage = styled.img`
  max-width: 300px;
  height: auto;
`;
