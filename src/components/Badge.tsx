import { BadgeStyled } from "./styles/Badge.styled";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  dark?: boolean;
  active?: boolean;
}

export const Badge = ({ children, dark, active, ...props }: Props) => {
  return (
    <BadgeStyled $dark={dark} $active={active} {...props}>
      {children}
    </BadgeStyled>
  );
};
