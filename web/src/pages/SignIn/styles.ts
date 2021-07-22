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
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    max-width: 340px;
    height: auto;
  }

  @media only screen and (max-width: 360px) {
    img {
      max-width: 240px;
      height: auto;
    }
  }

  h1 {
    margin-top: 40px;

    text-align: center;
    font-size: 36px;
    color: var(--color-text);
  }

  p {
    margin: 8px 0 16px;

    text-align: center;
    color: ${shade(0.3, '#a8a8ae')};
  }

  button {
    margin-top: 20px;
  }

  .forgot-password {
    width: 100%;
    padding-left: 8px;
    margin: 8px 0;

    text-align: start;
    color: var(--color-text);
    font-weight: 700;
  }

  strong {
    margin-top: 16px;
    color: var(--color-text);
  }

  .btn-google {
    background: #dc4e41;

    &:hover {
      background: ${shade(0.2, '#dc4e41')};
    }
  }

  .link-signup {
    margin-top: 16px;
    padding: 8px;

    color: #0779e4;

    &:hover {
      color: ${shade(0.2, '#0779e4')};
    }
  }
`;
