import styled from 'styled-components';
import { ImArrowLeft2 } from 'react-icons/im';

export const Input = styled.input`
  padding: 8px 20px 8px 8px;
  border-radius: 4px;
  font: inherit;
`;

export const BackButton = styled.button`
  position: relative;
  background-color: #fff;
  margin-bottom: 10px;
  width: 40px;
  height: 40px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
  }
`;

export const Icon = styled(ImArrowLeft2)`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
