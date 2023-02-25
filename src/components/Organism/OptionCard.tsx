import { OptionCardStyled } from "../styles/OptionCard.styled";
import { Option } from "../../helpers/option.interface";

interface OptionCardProps {
  productOption: Option[];
}

export const OptionCard = ({ productOption }: OptionCardProps) => {
  return (
    <>
      {productOption.map((option) => (
        <OptionCardStyled>
          <div className="zelty-option-card__container">
            <input type="checkbox" />
            <label>{option.name}</label>
          </div>
        </OptionCardStyled>
      ))}
    </>
  );
};
