import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 450px;
  margin-top: 8px;
  display: flex;
  flex-direction: column;

  label {
    color: var(--color-text);
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 6px;
  }

  input {
    width: inherit;
    padding: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;

    &:focus-within {
      border: 1px solid var(--color-primary);
    }
  }
`;
