import styled from 'styled-components';
import { shade } from 'polished';

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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    strong {
      margin-right: 10px;
      color: ${shade(0.2, '#efefef')};
    }

    p {
      color: ${shade(0.1, '#efefef')};
    }
  }
`;

export const Description = styled.div`
  margin-top: 16px;

  background-color: #ccc;
  padding: 8px;

  border: 0;
  border-radius: 5px;

  h3 {
    color: #444;
  }

  p {
    color: #444;
    margin-top: 8px;
    text-align: justify;
  }
`;

export const Requirements = styled.div`
  margin-top: 16px;

  h3 {
    color: #fff;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    p {
      margin-top: 8px;
      text-align: justify;

      background-color: #ccc;
      color: #444;
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
      margin-top: 16px;
      color: #fff;
    }

    span {
      margin-top: 8px;
      color: ${shade(0.1, '#efefef')};
    }
  }
`;

export const Contact = styled.div`
  margin-top: 24px;

  h3 {
    margin-bottom: 8px;
    color: #fff;
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
