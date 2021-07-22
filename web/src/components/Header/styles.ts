import styled from 'styled-components';

export const Container = styled.nav`
  width: 100%;
  height: 88px;
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 4px 2px;

  .burger-menu {
    display: none;
  }

  a {
    img {
      max-width: 150px;
      height: auto;
    }
  }

  > .nav-bar {
    width: 240px;

    display: flex;
    align-items: center;
    justify-content: space-around;

    > a {
      padding: 4px;

      background-color: transparent;

      border: 2px solid var(--color-primary);

      font-size: 16px;
      font-weight: 700;
      color: var(--color-primary);

      &:hover {
        background-color: #cccccc;
      }

      &.active {
        background: var(--color-primary);
        color: #ffffff;
      }
    }
  }

  @media only screen and (max-width: 642px) {
    padding: 0 20px;

    .burger-menu {
      display: block;

      border: 0;
      background: transparent;
    }

    a {
      img {
        max-width: 135px;
        height: auto;
      }
    }

    > .nav-bar {
      display: none;
    }
  }
`;
