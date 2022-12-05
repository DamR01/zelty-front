import { CartStyled } from "../styles/Cart.styled";
import { Badge } from "../Atoms/Badge";
import { Button } from "../Atoms/Button";
import { useRecoilValue } from "recoil";
import localOrderState from "../../atoms/localOrder.atom";
import { convertPrice } from "../../utils/convertPrice";
import { useNavigate } from "react-router-dom";

interface CartProps {
  onSubmit?(): void;
}
export const Cart = ({ onSubmit }: CartProps) => {
  const history = useNavigate();

  const localOrder = useRecoilValue(localOrderState);

  const totalBasket = localOrder.reduce((total, item) => total + item.price, 0);

  const handleSubmitOrder = () => {
    history("/checkout");
  };

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
        {!localOrder.length ? (
          <div className="zelty-restaurant__cart__items__empty">
            Aucun produit dans le panier 🥺
          </div>
        ) : (
          localOrder.map((item) => (
            <div
              className="zelty-restaurant__cart__items__container"
              key={item.id}
            >
              <img
                src={item.image}
                width="30px"
                height="30px"
                alt={item.name}
              />
              <p className="zelty-restaurant__cart__items__label">
                {item.name}
              </p>
              <p className="zelty-restaurant__cart__items__label">
                {convertPrice(item.price)}
              </p>
            </div>
          ))
        )}
      </div>
      <div className="zelty-restaurant__cart__foot">
        <div className="zelty-restaurant__cart__foot__total">
          <span className="label">Total</span>
          <span className="price">{convertPrice(totalBasket)}</span>
        </div>
        <Button onClick={handleSubmitOrder}>Commander</Button>
      </div>
    </CartStyled>
  );
};
