import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 960px;
  height: 100vh;

  display: flex;
  flex-direction: column;

  margin: 60px auto 0 auto;
  padding: 20px;

  h1 {
    text-align: center;
    font-size: 48px;
    color: ${props => props.theme.colors.text};
  }

  h2 {
    margin: 60px 0 30px 0;
    text-align: center;
    font-size: 28px;
    color: ${props => props.theme.colors.text};
  }
`;

export const HeaderDetails = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    border: 0;
    background-color: transparent;
    svg {
      color: ${props => props.theme.colors.text};
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
      color: ${props => shade(0.2, props.theme.colors.text)};
    }

    p {
      color: ${props => shade(0.2, props.theme.colors.text)};
    }
  }
`;

export const Description = styled.div`
  margin-top: 16px;

  background-color: ${props => shade(0.2, props.theme.colors.background)};
  padding: 8px;

  border: 0;
  border-radius: 5px;

  h3 {
    color: ${props => props.theme.colors.text};
  }

  p {
    color: ${props => props.theme.colors.text};
    margin-top: 8px;
    text-align: justify;
  }
`;

export const Requirements = styled.div`
  margin-top: 16px;

  h3 {
    color: ${props => props.theme.colors.text};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    p {
      margin-top: 8px;
      text-align: justify;

      background-color: ${props => shade(0.2, props.theme.colors.background)};
      color: ${props => props.theme.colors.text};
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
      color: ${props => props.theme.colors.text};
    }

    span {
      margin-top: 8px;
      color: ${props => shade(0.1, props.theme.colors.text)};
    }
  }
`;

export const Contact = styled.div`
  margin-top: 24px;

  h3 {
    margin-bottom: 8px;
    color: ${props => props.theme.colors.text};
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
