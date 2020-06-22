import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 300px;
  font-weight: 700;
  padding: 16px;
  border: 0;
  border-radius: 5px;
  background-color: #4991d2;
  color: #fff;
  transition: background-color 0.2s;

  & + button {
    margin-top: 16px;
  }

  &:hover {
    background-color: ${shade(0.2, '#4991d2')};
  }

  svg {
    margin: 0 10px;
  }
`;
