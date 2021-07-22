import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100%;

  max-width: 1100px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 60px auto;

  h1 {
    font-size: 48px;
    color: #202125;
  }
`;

export const Form = styled.form`
  margin-top: 60px;
  display: flex;

  div {
    padding: 16px;
    background-color: #0779e4;
    border: 1px solid #0779e4;
  }

  svg {
    color: #f0f0f9;
  }

  select {
    width: 500px;
    padding: 16px;
    border: 0;
    border-radius: 0;

    font-size: 20px;
  }
`;

export const Content = styled.main`
  margin-top: 80px;
  display: grid;
  grid-template-columns: 240px 180px 680px;
  grid-template-areas: 'filters separator cards';

  .separator {
    grid-area: separator;
  }

  .job-cards {
    grid-area: cards;
    display: flex;
    flex-wrap: wrap;
  }
`;

export const Filter = styled.aside`
  grid-area: filters;
  width: 240px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
      color: #202125;
      font-size: 24px;
      margin: 12px 0;
    }

    button {
      padding: 4px;
      border: 0;
      border-radius: 5px;
      color: #f0f0f9;
      font-weight: 500;
      background: #0779e4;

      & + button {
        margin-top: 4px;
      }

      &:hover {
        background-color: ${shade(0.2, '#0779e4')};
      }
    }
  }
`;
