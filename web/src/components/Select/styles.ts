import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;

  label {
    color: ${props => props.theme.colors.text};
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 6px;
  }

  select {
    width: 450px;
    padding: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;

    font-size: 16px;

    color: #444;

    ::placeholder {
      color: ${shade(0.2, '#ccc')};
    }

    &:focus-within {
      border: 1px solid ${props => props.theme.colors.primary};
    }

    option {
      font-size: 20px;
    }
  }
`;
