import styled from 'styled-components';

export const Navigation = styled.nav`
  display: flex;
  gap: 16px;
  margin-left: 10px;

  a {
    text-decoration: none;
    color: #ffcc00;
    font-weight: bold;
    font-size: 30px;
    transition: font-size 0.2s, color 0.2s;

    &:hover {
      font-size: 32px; 
      color: #ffdd33; 
    }
  }
`;

export const LayoutContainer = styled.div`
  min-height: 100vh;
  background-color: #0077cc;
  color: #fff;
`;
