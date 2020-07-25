import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;

  a {
    margin: 0 auto;

    img {
      max-width: 180px;
      height: auto;
      padding: 8px;
    }
  }

  h1 {
    font-size: 36px;
    color: ${props => props.theme.colors.text};
  }

  p {
    margin-top: 8px;
    text-align: start;
    color: ${props => shade(0.1, props.theme.colors.text)};
  }

  button {
    width: 450px;
    margin-top: 16px;
  }
`;
