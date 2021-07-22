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

  img {
    max-width: 250px;
    height: auto;
    background-color: var(--color-background);
    padding: 8px;
  }

  p {
    width: 300px;
    margin-top: 32px;
    color: ${shade(0.3, '#a8a8ae')};
    font-weight: 500;
  }

  button {
    width: 300px;
  }

  div {
    display: flex;
    flex-direction: column;

    margin-top: 30%;

    a {
      margin-top: 20px;
      display: flex;
      align-items: center;
      color: var(--color-text);
      font-size: 18px;

      &:hover {
        color: ${shade(0.3, '#202125')};
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
