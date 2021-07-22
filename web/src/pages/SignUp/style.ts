import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;

  margin: 60px 0 16px;
`;

export const Form = styled.form`
  width: 450px;
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 48px;
    color: var(--color-text);
  }

  p {
    max-width: 420px;
    margin: 8px 0 16px;
    text-align: center;
    color: ${shade(0.3, '#a8a8ae')};
  }

  button {
    margin-top: 20px;
  }

  a {
    margin-top: 16px;
    padding: 8px;

    color: var(--color-primary);

    &:hover {
      color: ${shade(0.2, '#0779e4')};
    }
  }
`;
