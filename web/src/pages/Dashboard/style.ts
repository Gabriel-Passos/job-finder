import styled from 'styled-components';

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
`;

export const Form = styled.form`
  margin-top: 60px;
  display: flex;

  div {
    padding: 16px;
    background-color: #3c4f77;
  }

  svg {
    color: #fff;
  }

  select {
    width: 500px;
    padding: 16px;
    border: 1px solid #ccc;

    font-size: 20px;
  }
`;

export const Content = styled.div`
  margin-top: 70px;

  display: flex;
  width: 100%;
  max-width: 960px;
`;

export const Filter = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;

  div {
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
      color: #444;
      margin-bottom: 15px;
    }

    button {
      padding: 4px;
      border: 1px solid #ccc;
      border-radius: 5px;
      color: #444;

      & + button {
        margin-top: 5px;
      }
    }
  }
`;

export const Jobs = styled.div`
  width: 700px;
  margin-left: 20px;

  a {
    margin: 5px 0 10px 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 25px;
    background-color: #fff;
    border: 0;
    border-radius: 5px;

    p {
      font-weight: 300;
    }
  }
`;
