import styled from 'styled-components';

export const CastContainer = styled.div`
  ul {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
  }

  li {
    background-color: blue;
    border-radius: 4px;
    padding: 16px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover {
      transform: translateY(-4px);
      background-color: lightblue;
    }
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
  }

  h3 {
    font-size: 18px;
    margin: 8px 0;
    color: white;
    transition: color 0.2s;
  }

  p {
    font-size: 18px;
    color: black;
  }

  li:hover h3 {
    color: black;
  }
`;
