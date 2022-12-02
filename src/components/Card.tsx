import { CardStyled } from "./styles/Card.styled";
import { Button } from "./Button";

export const Card = () => {
  return (
    <CardStyled>
      <div className="zelty-card__container">
        <h3>PRODUIT</h3>
        <img
          src="https://i.pinimg.com/originals/90/0f/fb/900ffbce1f01546b5660088ad69d0404.jpg"
          width="100px"
          height="100px"
          alt="img"
        />
        <p>description du produit</p>
        <Button>Choisir</Button>
      </div>
    </CardStyled>
  );
};
