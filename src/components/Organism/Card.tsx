import { CardStyled } from "../styles/Card.styled";
import { Button } from "../Atoms/Button";
import { Product } from "../../helpers/product.interface";

import localOrderState from "../../atoms/localOrder.atom";
import { useSetRecoilState } from "recoil";
import { convertPrice } from "../../utils/convertPrice";

interface CardProps {
  products: Product[];
}

export const Card = ({ products }: CardProps) => {
  const setLocalOrder = useSetRecoilState(localOrderState);
  const addProduct = (product: Product) => {
    setLocalOrder((prevState) => [...prevState, product]);
  };

  return (
    <>
      {products.map((product: Product) => (
        <CardStyled key={product.id}>
          <div className="zelty-card__container">
            <h3>{product.name}</h3>
            <div className="zelty-card__tag-price">
              {convertPrice(product.price)}
            </div>

            <img
              src={product.image}
              width="100px"
              height="100px"
              alt={product.name}
            />
            <p className="zelty-card__description">{product.description}</p>

            <Button
              onClick={() => addProduct(product)}
              disabled={product.sold_out}
            >
              Choisir
            </Button>
          </div>
        </CardStyled>
      ))}
    </>
  );
};
