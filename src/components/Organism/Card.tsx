import { CardStyled } from "../styles/Card.styled";
import { Button } from "../Atoms/Button";
import { Product } from "../../helpers/product.interface";

import { useState } from "react";
import localOrderState from "../../atoms/localOrder.atom";
import { useSetRecoilState } from "recoil";

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
            <img
              src={product.image}
              width="100px"
              height="100px"
              alt={product.name}
            />
            <p className="zelty-card__description">{product.description}</p>
            <Button onClick={() => addProduct(product)}>Choisir</Button>
          </div>
        </CardStyled>
      ))}
    </>
  );
};
