import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  list-style: none;
  padding-bottom: 20px;
  box-shadow: 0px 3px 2px 2px rgba(100, 100, 150, 0.15);
  border-bottom: solid 1px #fff;
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
    color: #cc8050;
  }
`;
