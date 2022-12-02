import { CheckoutStyled } from "./Checkout.styled";
import { Input } from "../components/Atoms/Input";
import { Cart } from "../components/Organism/Cart";
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
