import styled from "styled-components";

export const ButtonStyled = styled.button`
  all: unset;
  background: var(--primary);
  color: white;
  width: 100%;
  cursor: pointer;
  padding: 0.9rem 1rem;
  border-radius: 13px;
  box-sizing: border-box;
  text-align: center;
  font-weight: 700;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.7;
  }
  &:disabled {
    background: #d8d8d8;
    cursor: initial;
    &:hover {
      opacity: 1;
    }
  }
`;
