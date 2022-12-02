import { StyledInput } from "../styles/Input.styled";
import { HTMLInputTypeAttribute } from "react";

interface InputProps {
  type: HTMLInputTypeAttribute;
  placeholder: string;
  register: any;
}
export const Input = ({
  placeholder,
  type,
  register,
  ...props
}: InputProps) => {
  return (
    <StyledInput>
      <input type={type} placeholder={placeholder} {...register} {...props} />
    </StyledInput>
  );
};
