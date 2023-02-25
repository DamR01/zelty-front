import { CardStyled } from "../styles/Card.styled";
import { Button } from "../Atoms/Button";
import { Product } from "../../helpers/product.interface";

import localOrderState, { OrderItem } from "../../atoms/localOrder.atom";
import { useRecoilState } from "recoil";
import { convertPrice } from "../../utils/convertPrice";
import { Option } from "../../helpers/option.interface";
import { OptionCard } from "./OptionCard";
import { useState } from "react";

interface CardProps {
  products: Product[];
  options: Option[];
}

export const Card = ({ products, options }: CardProps) => {
  const [localOrder, setLocalOrder] = useRecoilState(localOrderState);

  const [hasOption, setHasOption] = useState(false);

  const [productOption, setProductOption] = useState<any[]>([]);

  console.log("options from API", options);

  const addProduct = (product: OrderItem) => {
    const productIndex = localOrder.findIndex(({ id }) => id === product.id);
    console.log("product", product);
    if (product.available_options) {
      setHasOption(true);
      const goodOpt = options.map((opt) => {
        opt.items.map((option) => {
          console.log("option", option);
          product.available_options?.find((item) => {
            if (item === option.id) {
              console.log("ok");
              setProductOption((prev) => [...prev, option]);
            }
          });
        });
      });
    }
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
  console.log("productOption", productOption);
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

          {hasOption && <OptionCard productOption={productOption} />}
        </CardStyled>
      ))}
    </>
  );
};
