import styled from 'styled-components';
import { shade } from 'polished';

import background from '../../assets/background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
  justify-content: space-around;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 750px;

  margin: auto 0;

  h1 {
    font-size: 42px;
    color: #444;
  }

  p {
    color: ${shade(0.3, '#ccc')};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin-top: 30%;

    a {
      margin-top: 20px;
      display: flex;
      align-items: center;
      color: #444;
      font-size: 18px;

      &:hover {
        color: #f09526;
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
  background-size: contain;
  max-width: 1000px;
  height: auto;
`;
