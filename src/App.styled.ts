import styled from "styled-components";

export const AppStyled = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  .zelty-restaurant {
    &__logo {
      height: 35px;
      margin-top: 20px;
    }
    &__content {
      margin-top: 25px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      grid-auto-rows: minmax(60px, auto);

      &__left {
        grid-column: 1 / 3;
        grid-row: 1;
        display: flex;
        gap: 20px;
        flex-direction: column;
      }
      &__right {
        grid-column: 3 / 4;
        grid-row: 1;
      }
    }
  }
`;
