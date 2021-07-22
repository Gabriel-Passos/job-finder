import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.footer`
  box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 4px 2px;
  width: 100%;
`;

export const Content = styled.nav`
  height: 88px;
  max-width: 960px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    img {
      max-width: 150px;
      height: auto;
    }
  }

  > div {
    display: flex;
    align-items: center;

    > a {
      height: 30px;
      padding: 4px;

      background-color: transparent;

      font-size: 16px;
      font-weight: 700;
      color: var(--color-text);

      & + a {
        margin-left: 16px;
      }

      &:hover {
        background-color: ${shade(0.1, '#a8a8ae')};
      }

      &.active {
        border-bottom: 4px solid var(--color-primary);
      }
    }
  }
`;
