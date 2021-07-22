import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.section`
  div {
    display: flex;
    justify-content: space-between;

    button {
      margin: 0;
      width: 120px;
      padding: 16px;
      color: var(--color-primary);
      font-weight: 700;
      border: 1px dashed var(--color-primary);
      border-radius: 5px;
      background: ${lighten(0.4, '#0779e4')};

      &:hover {
        background: ${lighten(0.3, '#0779e4')};
      }
    }
  }
`;
