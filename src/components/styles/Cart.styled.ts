import styled from "styled-components";

export const CartStyled = styled.div`
  background: white;
  border-radius: 30px;
  padding: 1rem 0.8rem;
  box-sizing: border-box;
  box-shadow: 0 0 15px 9px rgba(0, 0, 0, 0.03);

  .zelty-restaurant__cart {
    &__head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #eaeaea;
      padding-bottom: 1rem;
      &__table {
        text-align: right;
        h3 {
          margin: 0;
          font-size: 0.8rem;
          color: #878888;
          font-weight: normal;
        }
        span {
          font-weight: bold;
        }
      }
    }
    &__items {
      display: flex;
      flex-direction: column;
      padding: 1rem 0.5rem;
      &__container {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      &__label {
        margin-left: 0.5rem;
        font-weight: 600;
      }
      &__quantity {
        margin-left: 0.5rem;
        font-weight: 600;
        color: var(--primary);
      }
      &__empty {
        text-align: center;
        padding: 2rem 0;
      }
    }
    &__foot {
      position: relative;
      border-top: 1px solid #eaeaea;

      &__total {
        display: flex;
        justify-content: space-between;
        padding: 1rem 0;

        .label {
          color: #8b8a8b;
        }
        .price {
          color: black;
          font-weight: 700;
          font-size: 1rem;
        }
      }
    }
  }
`;
