import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    max-width: 250px;
    height: auto;
  }

  .link-signup {
    margin-top: 16px;
    padding: 8px;

    color: ${props => props.theme.colors.primary};

    &:hover {
      color: ${props => shade(0.2, props.theme.colors.primary)};
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;

  h1 {
    text-align: center;
    margin-top: 40px;
    font-size: 36px;
    color: ${props => props.theme.colors.text};
  }

  p {
    margin: 8px 0 16px;
    text-align: center;
    color: ${props => shade(0.3, props.theme.colors.subText)};
  }

  button {
    width: 450px;
    margin-top: 20px;
  }

  .forgot-password {
    text-align: start;
    width: 140px;
    margin: 8px 4px 0;
    color: ${props => props.theme.colors.text};
    font-weight: 700;
  }

  .external-login {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 24px;

    strong {
      color: ${props => props.theme.colors.text};
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 8px;
      background: #dc4e41;
      border: 0;
      border-radius: 5px;

      color: #fff;
      font-weight: 700;

      svg {
        margin-right: 16px;
      }

      & + button {
        background: #3b5998;
        padding: 10px 8px;
      }
    }
  }
`;
