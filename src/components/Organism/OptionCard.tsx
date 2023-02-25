import { Button } from "../Atoms/Button";
import { OptionCardStyled } from "../styles/OptionCard.styled";

interface OptionCardProps {
  id: string;
  name: string;
}

export const OptionCard = ({ name, id }: OptionCardProps) => {
  return (
    <>
      <OptionCardStyled>
        <div className="zelty-card__container">
          <input type="checkbox" />

          <Button
            onClick={() => {
              //
            }}
          >
            Ajouter
          </Button>
        </div>
      </OptionCardStyled>
    </>
  );
};
