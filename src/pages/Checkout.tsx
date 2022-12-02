import { Input } from "../components/Input";
import { Cart } from "../components/Cart";
import { CheckoutStyled } from "./Checkout.styled";
export const Checkout = () => {
  return (
    <CheckoutStyled>
      <div className="zelty-checkout__customer-container">
        <div className="zelty-checkout__customer-input">
          <Input />
          <Input />
        </div>
        <div className="zelty-checkout__customer-input">
          <Input />
          <Input />
        </div>
      </div>
      <Cart />
    </CheckoutStyled>
  );
};
