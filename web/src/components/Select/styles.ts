import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  margin-top: 8px;
  display: flex;
  flex-direction: column;

  label {
    color: var(--color-text);
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 6px;
  }

  select {
    width: inherit;
    padding: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;

    font-size: 16px;

    color: #444;

    ::placeholder {
      color: ${shade(0.2, '#ccc')};
    }

    &:focus-within {
      border: 1px solid var(--color-primary);
    }

    option {
      font-size: 20px;
    }
  }
`;
