import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GoBackLink = styled(Link)`
  text-decoration: none;
  font-size: 25px;
  color: black;
  transition: transform 0.2s, color 0.2s;
  font-weight: bold;
  margin-left: 10px;

  &:hover {
    transform: scale(1.1);
    color: white;
  }
`;

export const CastLink = styled(Link)`
  text-decoration: none;
  font-size: 25px;
  font-weight: bold;
  color: black;
  transition: transform 0.2s, color 0.2s;
  margin-left: 10px;

  &:hover {
    transform: scale(1.1);
    color: white;
  }
`;

export const ReviewsLink = styled(Link)`
  text-decoration: none;
  font-size: 25px;
  color: black;
  transition: transform 0.2s, color 0.2s;
  font-weight: bold;
  margin-left: 10px;

  &:hover {
    transform: scale(1.1);
    color: white;
  }
`;
