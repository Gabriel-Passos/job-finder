import styled from 'styled-components';
import { shade, lighten } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 1460px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  padding: 60px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 100px;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CreateJobsHeader = styled.header`
  width: 100%;
  max-width: 280px;

  h1 {
    margin: 64px 0 32px;
    text-align: center;
    color: ${props => props.theme.colors.text};
  }

  p {
    font-size: 18px;
    color: #737380;
    line-height: 32px;
  }

  button {
    display: flex;
    align-items: center;
    margin-top: 80px;
    color: #41414d;
    font-size: 18px;
    font-weight: 500;
    transition: opacity 0.2s;
    border: 0;

    svg {
      margin-right: 8px;
    }

    &:hover {
      opacity: 0.8;
    }
  }

  img {
    width: 250px;
    height: 64px;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;

  aside {
    & + aside {
      margin-left: 16px;
    }
  }

  textarea {
    width: 100%;
    min-height: 335px;
    max-height: 420px;
    padding: 16px 24px;
    line-height: 24px;

    font-size: 18px;
    color: #444;

    resize: vertical;
  }

  span {
    display: block;
    margin: 4px 4px 0;
    color: ${props => props.theme.colors.subText};
  }

  button {
    margin-top: 16px;
    width: 450px;
  }

  select {
    padding: 16px;
  }

  .multi-buttons {
    margin-top: 8px;
    display: flex;
    flex-direction: column;

    p {
      color: ${props => props.theme.colors.text};
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 6px;
    }

    .buttons {
      display: flex;
      justify-content: space-between;

      .selected {
        background: ${props => lighten(0.2, props.theme.colors.primary)};
        color: ${props => shade(0.3, props.theme.colors.primary)};
      }
    }
  }

  .city-uf {
    display: flex;
    justify-content: space-between;

    input {
      width: 380px;
    }

    .uf {
      width: 60px;
    }
  }
`;
