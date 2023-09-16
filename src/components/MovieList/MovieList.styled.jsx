import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieItem = styled.li`
  margin: 10px 10px;
  list-style: none;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 18px;
  font-weight: bold;
  transition: color 0.2s;

  &:hover {
    color: gold;
  }
`;
