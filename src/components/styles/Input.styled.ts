import styled from "styled-components";

export const StyledInput = styled.div`
  input {
    all: unset;
    background: white;
    border-radius: 30px;
    padding: 0.8rem 1.6rem;
    width: 200px;

    box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.03);

    &:focus {
      box-shadow: inset 0 0 0 2px var(--primary);
    }
  }
`;
