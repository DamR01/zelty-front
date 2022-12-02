import styled from "styled-components";

export const CheckoutStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  .zelty-checkout {
    &__customer-container {
      display: flex;
    }

    &__customer-input {
      display: flex;
      flex-direction: column;
      input {
        margin: 0.5rem;
      }
    }
  }
`;
