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
    background-color: ${props => props.theme.colors.background};
    padding: 8px;
  }

  p {
    width: 300px;
    margin-top: 32px;
    color: ${props => shade(0.3, props.theme.colors.subText)};
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
      color: ${props => props.theme.colors.text};
      font-size: 18px;

      &:hover {
        color: ${props => shade(0.3, props.theme.colors.text)};
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
