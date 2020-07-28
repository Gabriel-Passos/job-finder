import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;

  margin: 60px auto 0 auto;
  padding: 10px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;

  > div {
    border-right: 2px solid
      ${props =>
        props.theme.title === 'light'
          ? 'rgba(0,0,0,0.3)'
          : 'rgba(255,255,255,0.4)'};
  }

  > form {
    padding: 8px;
    opacity: 0.7;

    &:hover {
      opacity: 1;
      background-color: transparent;
    }

    &:focus-within {
      opacity: 1;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 48px;
    color: ${props => props.theme.colors.text};
  }

  p {
    margin: 8px 0 16px;
    text-align: center;
    color: ${props => shade(0.3, props.theme.colors.text)};
  }

  button {
    width: 450px;
    margin-top: 20px;
  }
`;
