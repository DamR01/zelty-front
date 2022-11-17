import { ButtonStyled } from "./styles/Button.styled";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, ...props }: Props) => {
  return (
    <ButtonStyled type="button" {...props}>
      {children}
    </ButtonStyled>
  );
};
