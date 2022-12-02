import { CartStyled } from "../styles/Cart.styled";
import { Badge } from "../Atoms/Badge";
import { Button } from "../Atoms/Button";

export const Cart = () => {
  return (
    <CartStyled className="zelty-restaurant__cart">
      <div className="zelty-restaurant__cart__head">
        <Badge active>Sur place</Badge>
        <div className="zelty-restaurant__cart__head__table">
          <h3>Table</h3>
          <span>03</span>
        </div>
      </div>
      <div className="zelty-restaurant__cart__items">
        <div className="zelty-restaurant__cart__items__empty">
          Aucun produit dans le panier 🥺
        </div>
      </div>
      <div className="zelty-restaurant__cart__foot">
        <div className="zelty-restaurant__cart__foot__total">
          <span className="label">Total</span>
          <span className="price">0 €</span>
        </div>
        <Button disabled>Commander</Button>
      </div>
    </CartStyled>
  );
};
