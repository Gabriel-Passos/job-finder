import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  padding: 16px;
  box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 4px 2px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 960px;
  margin: 0 auto;

  a {
    font-weight: 700;
    font-size: 22px;

    img {
      max-width: 150px;
      height: auto;
      padding: 8px;
    }
  }

  > div {
    display: flex;
    align-items: center;

    a {
      padding: 8px;
      background-color: transparent;
      font-size: 16px;
      color: ${props => props.theme.colors.text};

      & + a {
        margin: 0 16px;
      }

      &:hover {
        background-color: ${props => shade(0.1, props.theme.colors.buttonText)};
      }

      &.active {
        border-bottom: 4px solid #0779e4;
      }
    }
  }
`;
