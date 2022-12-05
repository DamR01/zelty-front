import styled from "styled-components";

export const CheckoutStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 1rem 2rem;
  background: rgba(220, 250, 212, 0.18);

  @media (max-width: 769px) {
    display: flex;
    flex-direction: column;
  }

  .zelty-checkout {
    &__customer-container {
      display: flex;
      @media (max-width: 769px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 1rem;
      }
    }

    &__back-link {
      all: unset;
      cursor: pointer;
      text-underline: none;
      font-style: italic;
      &:hover {
        color: darkgray;
      }
    }

    &__title {
      color: var(--primary);
      font-size: 1.2rem;
    }

    &__customer-input {
      display: flex;
      flex-direction: column;

      input {
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
      }
    }
  }
`;
