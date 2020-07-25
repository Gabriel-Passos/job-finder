import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;

  label{
    margin-bottom: 4px;
    color: #f0f0f9;
    font-size: 18px;
    font-weight: 500;
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

    option {
      font-size: 20px;
    }
  }
`;
