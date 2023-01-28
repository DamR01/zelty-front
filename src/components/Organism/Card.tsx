import { CardStyled } from "../styles/Card.styled";
import { Button } from "../Atoms/Button";
import { Product } from "../../helpers/product.interface";

import localOrderState, { OrderItem } from "../../atoms/localOrder.atom";
import { useRecoilState } from "recoil";
import { convertPrice } from "../../utils/convertPrice";
import { Option } from "../../helpers/option.interface";

interface CardProps {
  products: Product[];
  options: Option;
}

export const Card = ({ products }: CardProps) => {
  const [localOrder, setLocalOrder] = useRecoilState(localOrderState);

  const addProduct = (product: OrderItem) => {
    const productIndex = localOrder.findIndex(({ id }) => id === product.id);
    const { id, price, name, image } = product;
    if (productIndex === -1) {
      return setLocalOrder([
        ...localOrder,
        { id, price, image, name, quantity: 1 },
      ]);
    }

    const updatedCart = localOrder.map((item, index) => {
      if (productIndex === index) {
        const newQuantity = item.quantity + 1;

        return {
          ...item,
          quantity: newQuantity,
        };
      }

      return item;
    });

    setLocalOrder(updatedCart);
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
