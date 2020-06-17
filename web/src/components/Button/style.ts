import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  width: 400px;
  font-weight: 700;
  padding: 16px;
  border: 0;
  border-radius: 5px;
  background-color: #f09526;
  color: #fff;
  transition: background-color 0.2s;

  & + button {
    margin-top: 16px;
  }

  &:hover {
    background-color: ${shade(0.1, '#f09526')};
  }
`;
