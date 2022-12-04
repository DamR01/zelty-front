import { CardStyled } from "../styles/Card.styled";
import { Button } from "../Atoms/Button";
import { Product } from "../../helpers/product.interface";

interface CardProps {
  products: Product[];
}

export const Card = ({ products }: CardProps) => {
  return (
    <>
      {products.map((product: Product) => (
        <CardStyled>
          <div className="zelty-card__container">
            <h3>{product.name}</h3>
            <img
              src={product.image}
              width="100px"
              height="100px"
              alt={product.name}
            />
            <p>{product.description}</p>
            <Button>Choisir</Button>
          </div>
        </CardStyled>
      ))}
    </>
  );
};
