import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 860px;
  height: 100vh;

  display: flex;
  flex-direction: column;

  margin: 60px auto 0 auto;
  padding: 20px;

  h1 {
    text-align: center;
    font-size: 48px;
    color: #444;
  }

  h2 {
    margin: 60px 0 30px 0;
    text-align: center;
    font-size: 28px;
    color: #444;
  }
`;

export const Content = styled.div``;

export const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;

    strong {
      margin-right: 10px;
    }
  }
`;

export const Description = styled.div`
  margin-top: 16px;

  background-color: #ccc;
  padding: 8px;

  border: 0;
  border-radius: 5px;

  p {
    margin-top: 8px;
    text-align: justify;
  }
`;

export const Requirements = styled.div`
  margin-top: 16px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    p {
      margin-top: 8px;
      text-align: justify;

      background-color: #ccc;
      padding: 8px;
      border: 0;
      border-radius: 5px;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    margin-top: 8px;

    strong {
      margin-top: 8px;
    }
  }
`;

export const Contact = styled.div`
  margin-top: 24px;

  h3 {
    margin-bottom: 8px;
  }

  div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    button {
      margin: 8px;
    }
  }
`;
