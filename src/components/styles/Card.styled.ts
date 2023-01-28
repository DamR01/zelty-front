import styled from "styled-components";

export const CardStyled = styled.div`
  background: white;
  border-radius: 20px;
  padding: 1rem 0.8rem;
  box-sizing: border-box;
  box-shadow: 0 0 12px 6px rgba(0, 0, 0, 0.03);
  width: 100%;

  &:hover {
    box-shadow: 0 0 2px 4px var(--primary);
    transform: scale(1.02);
  }

  @media (max-width: 769px) {
    h3 {
      margin-top: 2rem;
    }
  }

  .zelty-card {
    &__container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    &__description {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box !important;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      white-space: normal;
      font-style: italic;
    }

    &__tag-price {
      border-radius: 50%;
      width: 24px;
      height: 24px;
      font-weight: 800;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--primary);
      color: white;
      font-size: 0.8rem;
      position: absolute;
      top: 0;
      right: 0;
      padding: 0.5rem;
    }
  }
`;
