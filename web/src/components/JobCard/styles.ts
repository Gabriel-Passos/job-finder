import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 320px;
  height: 300px;

  background-color: #fff;
  margin: 8px;
  padding: 8px;

  border-radius: 4px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-bottom: 8px;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);

    img {
      max-width: 80px;
      height: auto;
    }

    strong {
      font-size: 16px;
      color: var(--color-text);
    }
  }

  > div {
    display: flex;
    flex-direction: column;

    padding-bottom: 16px;

    h2 {
      font-size: 24px;
      padding-bottom: 16px;
      color: var(--color-text);
    }

    p {
      display: flex;
      align-items: center;

      font-size: 15px;
      color: var(--color-text);

      padding: 4px 0;

      svg {
        margin-right: 8px;
      }
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 15px;
    color: var(--color-primary);

    border: 0;

    background-color: transparent;

    &:hover {
      color: ${shade(0.3, '#0779e4')};
    }
  }
`;
