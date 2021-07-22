import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  width: 100%;
  height: 55px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  color: #fff;

  border: 0;
  border-radius: 5px;

  background-color: #0779e4;

  transition: background-color 0.2s;

  & + button {
    margin-top: 16px;
  }

  &:hover {
    background-color: ${shade(0.2, '#0779e4')};
  }

  svg {
    margin: 0 10px;
  }
`;
