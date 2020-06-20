import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 60px auto 0 auto;
  padding: 20px;

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
  margin-bottom: 50px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

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
      background-color: #efefef;

      & + button {
        margin-top: 5px;
      }

      &:hover {
        background-color: ${shade(0.1, '#efefef')};
      }
    }
  }
`;

export const Jobs = styled.div`
  width: 700px;
  margin-left: 20px;

  transform: translateX(10px);

  a {
    margin: 5px 0 10px 0;

    display: flex;
    flex-direction: column;

    padding: 25px;
    background-color: #fff;
    color: #3c4f77;
    border: 0;
    border-radius: 5px;

    transition: transform 0.2s;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
    }

    p {
      font-weight: 300;
    }

    &:hover {
      transform: translateX(8px);
    }
  }
`;

export const JobDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    display: flex;
    align-items: center;

    svg {
      margin-right: 5px;
    }
  }
`;

export const Techs = styled.div`
  margin-top: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    display: flex;
    align-items: center;
    padding: 8px;
    border: 0;
    border-radius: 10px;
    background-color: #ccc;

    svg {
      margin-right: 5px;
    }
  }
`;
