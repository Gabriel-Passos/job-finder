import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 860px;
  height: 100vh;

  display: flex;
  flex-direction: column;

  margin: 60px auto;
  padding: 20px;

  h1 {
    text-align: center;
    font-size: 48px;
    color: #fff;
  }

  h2 {
    margin: 60px 0 30px 0;
    text-align: center;
    font-size: 28px;
    color: #fff;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    border: 0;
    background-color: transparent;

    svg {
      color: #fff;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 450px;

  display: flex;
  flex-direction: column;

  margin: 60px auto 0 auto;

  input {
    width: 450px;
    padding: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;

    & + input {
      margin-top: 8px;
    }

    ::placeholder {
      color: ${shade(0.2, '#ccc')};
    }
  }

  textarea {
    margin: 8px 0;
    padding: 16px;

    border: 0;
    border-radius: 5px;

    font-size: 16px;

    ::placeholder {
      color: ${shade(0.2, '#ccc')};
    }
  }

  span {
    margin: 4px 4px 8px;
    color: ${shade(0.8, '#efefef')};
  }

  select {
    width: 450px;
    padding: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;

    font-size: 16px;

    color: #444;

    option {
      font-size: 20px;
    }

    & + select {
      margin: 8px 0;
    }
  }

  div {
    input {
      width: 230px;
      & + input {
        margin-left: 10px;
        width: 60px;
      }
    }
  }

  button {
    margin-top: 20px;
  }
`;
