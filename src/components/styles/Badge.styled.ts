import styled, { css } from "styled-components";

export const BadgeStyled = styled.button<{
  $dark?: boolean;
  $active?: boolean;
}>`
  all: unset;
  border-radius: 12px;
  padding: 0.35rem 0.8rem;
  background: #ebeaeb;
  color: #8b8a8b;
  display: inline-block;
  cursor: pointer;
  font-size: 0.8rem;

  ${({ $active, $dark }) =>
    $active &&
    css`
      background: rgba(23, 204, 118, ${$dark ? "1" : "0.2"});
      color: ${$dark ? "white" : "var(--primary)"};
    `}
`;
