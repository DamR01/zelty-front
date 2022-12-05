import styled from "styled-components";

export const CardStyled = styled.div`
  background: white;
  border-radius: 20px;
  padding: 1rem 0.8rem;
  box-sizing: border-box;
  box-shadow: 0 0 15px 9px rgba(0, 0, 0, 0.03);
  width: 100%;

  &:hover {
    box-shadow: 0 0 15px 9px var(--primary);
  }

  .zelty-card {
    &__container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    &__description {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box !important;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      white-space: normal;
    }
  }
`;
