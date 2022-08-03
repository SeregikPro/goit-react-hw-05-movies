import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  list-style: none;
`;

export const Navlink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  margin-left: 20px;

  cursor: pointer;

  &.active {
    color: #aa5050;
  }

  :hover {
    color: #aa5050;
  }
`;
