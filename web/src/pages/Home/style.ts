import styled from 'styled-components';
import { shade } from 'polished';

import background from '../../assets/background.jpg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  width: 100%;
  max-width: 500px;

  margin: auto 0;
  padding-left: 60px;

  h1 {
    font-size: 48px;
    color: #444;
  }

  p {
    color: ${shade(0.3, '#ccc')};
  }

  div {
    display: flex;
    flex-direction: column;

    margin-top: 30%;

    a {
      margin-top: 20px;
      display: flex;
      align-items: center;
      color: #444;
      font-size: 18px;

      &:hover {
        color: #3c4f77;
      }

      svg {
        margin-left: 10px;
      }
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${background}) no-repeat center;
  background-size: cover;
`;
