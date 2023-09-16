import styled from 'styled-components';

export const ReviewsContainer = styled.div`
  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin: 16px 0;
    padding: 16px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h3 {
    font-size: 25px;
    margin: 8px 0;
  }

  p {
    font-size: 18px;
    color: black;
  }
`;
