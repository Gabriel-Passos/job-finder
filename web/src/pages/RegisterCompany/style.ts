import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 60px auto 0 auto;
  padding: 10px;

  h1 {
    font-size: 48px;
    color: #444;
  }

  p {
    margin-top: 8px;
    text-align: center;
    color: ${shade(0.3, '#ccc')};
  }
`;

export const Form = styled.form`
  margin-top: 60px;
  display: flex;
  align-items: center;
  flex-direction: column;

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

  select {
    margin-top: 10px;
    width: 450px;
    padding: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;

    font-size: 16px;

    color: #444;

    option {
      font-size: 20px;
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
    width: 450px;
  }
`;
