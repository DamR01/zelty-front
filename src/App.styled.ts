import styled from "styled-components";

export const AppStyled = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  background: rgba(220, 250, 212, 0.18);

  .zelty-restaurant {
    &__logo {
      height: 35px;
      margin-top: 20px;
    }
    &__content {
      margin-top: 25px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 15px;
      grid-auto-rows: minmax(60px, auto);

      @media (max-width: 769px) {
        grid-template-columns: repeat(1, 1fr);
      }

      &__left {
        grid-column: 1 / 3;
        grid-row: 1;
        display: flex;
        gap: 20px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      &__right {
        grid-column: 3 / 4;
        grid-row: 1;
        @media (max-width: 769px) {
          display: flex;
          align-items: flex-end;
          grid-column: unset;
          grid-row: unset;
          justify-content: center;
        }
      }
    }
    &__products {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;

      @media (max-width: 769px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 10px;
        width: 80%;
      }
    }
  }
`;
