import styled from 'styled-components';
import { shade, lighten } from 'polished';

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
    color: var(--color-text);
  }

  h2 {
    margin: 60px 0 30px 0;
    text-align: center;
    font-size: 28px;
    color: var(--color-text);
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
      color: var(--color-text);
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
      color: ${shade(0.2, '#202125')};
    }

    p {
      color: ${shade(0.2, '#202125')};
    }
  }
`;

export const Description = styled.div`
  margin-top: 16px;

  background-color: ${lighten(0.2, '#a8a8ae')};
  padding: 8px;

  border: 2px dashed var(--color-subText);
  border-radius: 5px;

  h3 {
    color: var(--color-text);
  }

  p {
    color: var(--color-text);
    margin-top: 8px;
    text-align: justify;
  }
`;

export const Requirements = styled.div`
  margin-top: 16px;

  h3 {
    color: var(--color-text);
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    p {
      margin-top: 8px;
      text-align: justify;

      background-color: ${shade(0.2, '#eeeeee')};
      color: var(--color-text);
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
      color: var(--color-text);
    }

    span {
      margin-top: 8px;
      color: ${shade(0.1, '#202125')};
    }
  }
`;

export const Contact = styled.div`
  margin-top: 24px;

  h3 {
    margin-bottom: 8px;
    color: var(--color-text);
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
