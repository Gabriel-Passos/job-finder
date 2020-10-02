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
      color: ${props => props.theme.colors.primary};
      font-weight: 700;
      border: 1px dashed ${props => props.theme.colors.primary};
      border-radius: 5px;
      background: ${props => lighten(0.4, props.theme.colors.primary)};

      &:hover {
        background: ${props => lighten(0.3, props.theme.colors.primary)};
      }
    }
  }
`;
