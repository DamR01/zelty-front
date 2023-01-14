import { CardStyled } from "../styles/Card.styled";
import { Button } from "../Atoms/Button";
import { Product } from "../../helpers/product.interface";

import localOrderState from "../../atoms/localOrder.atom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { convertPrice } from "../../utils/convertPrice";
import { find } from "lodash";

interface CardProps {
  products: Product[];
}

export const Card = ({ products }: CardProps) => {
  const setLocalOrder = useSetRecoilState(localOrderState);
  const localOrder = useRecoilValue(localOrderState);

  console.log("localOrder", localOrder);

  const addProduct = (product: Product) => {
    if (!localOrder.length) {
      return setLocalOrder([{ ...product, quantity: 1 }]);
    }

    localOrder.forEach((item: any) => {
      if (item.menuId === product.menuId) {
        console.log("same");
        return setLocalOrder(() => [{ ...item, quantity: item.quantity + 1 }]);
      }
      return setLocalOrder((prevState) => [
        ...prevState,
        { ...product, quantity: 1 },
      ]);
    });
  };

  return (
    <>
      {products.map((product: Product) => (
        <CardStyled key={product.id}>
          <div className="zelty-card__container">
            <h3>{product.name}</h3>
            <div className="zelty-card__tag-price">
              <p>{product.quantity}</p>
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
