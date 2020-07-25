import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 60px auto 100px auto;
  padding: 20px;

  h1 {
    font-size: 48px;
    color: ${props => props.theme.colors.text};
  }
`;

export const Form = styled.form`
  margin-top: 60px;
  display: flex;

  div {
    padding: 16px;
    background-color: ${props => props.theme.colors.primary};
    border: 1px solid ${props => props.theme.colors.primary};
  }

  svg {
    color: ${props => props.theme.colors.buttonText};
  }

  select {
    width: 500px;
    padding: 16px;
    border: 0;
    border-radius: 0;

    font-size: 20px;
  }
`;

export const Content = styled.div`
  margin-top: 70px;
  margin-bottom: 50px;

  display: flex;
  justify-content: center;

  width: 100%;
  max-width: 960px;

  > div {
    display: flex;
    flex-wrap: wrap;

    margin-left: 24px;
  }
`;

export const Filter = styled.aside`
  width: 320px;
  display: flex;
  flex-direction: column;

  div {
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
      color: ${props => props.theme.colors.text};
      margin-bottom: 15px;
    }

    button {
      padding: 4px;
      border: 0;
      border-radius: 5px;
      color: ${props => props.theme.colors.buttonText};
      font-weight: 500;
      background-color: ${props => props.theme.colors.primary};

      & + button {
        margin-top: 5px;
      }

      &:hover {
        background-color: ${props => shade(0.2, props.theme.colors.primary)};
      }
    }
  }
`;
