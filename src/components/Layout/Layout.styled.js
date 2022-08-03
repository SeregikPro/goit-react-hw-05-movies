import styled from 'styled-components';

export const Main = styled.main`
  height: 100vh;
  margin: 0 auto;
  max-width: 920px;
`;

export const Header = styled.header`
  width: 100%;
  font-size: 32px;
  color: '#010101';
  border-bottom: solid 1px #335577;
  > nav {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 18px;
    > a {
      display: block;
    }
  }
`;

export const Nav = styled.nav`
  & > a {
    font-weight: 700;
    font-size: 24px;
    line-height: 1.33;
    text-decoration: none;
    color: #010105;
    &.active {
      color: #aa1255;
    }
  }
`;
