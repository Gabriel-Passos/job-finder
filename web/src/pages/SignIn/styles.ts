import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 60px auto;
  padding: 10px;

  footer {
    bottom: 0;
    position: fixed;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    margin-top: 16px;
    padding: 8px;

    border: 1px dashed ${props => props.theme.colors.primary};
    border-radius: 5px;

    color: ${props => props.theme.colors.primary};

    &:hover {
      color: ${props => shade(0.2, props.theme.colors.primary)};
    }
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 48px;
    color: ${props => props.theme.colors.text};
  }

  p {
    margin: 8px 0 16px;
    text-align: center;
    color: ${props => shade(0.3, props.theme.colors.subText)};
  }

  button {
    width: 450px;
    margin-top: 20px;
  }
`;
