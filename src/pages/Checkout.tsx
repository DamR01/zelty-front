import { CheckoutStyled } from "./Checkout.styled";
import { Input } from "../components/Atoms/Input";
import { Cart } from "../components/Organism/Cart";
import { useForm } from "react-hook-form";
export const Checkout = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log("data", data);
  return (
    <form>
      <CheckoutStyled>
        <div className="zelty-checkout__customer-container">
          <div className="zelty-checkout__customer-input">
            <Input
              type="text"
              placeholder="Prénom"
              register={{ ...register("firstName") }}
            />
            <Input
              type="email"
              placeholder="Email"
              register={{ ...register("email") }}
            />
          </div>
          <div className="zelty-checkout__customer-input">
            <Input
              type="text"
              placeholder="Nom"
              register={{ ...register("name") }}
            />
            <Input
              type="phone"
              placeholder="Téléphone"
              register={{ ...register("phone") }}
            />
          </div>
        </div>
        <Cart onSubmit={handleSubmit(onSubmit)} />
      </CheckoutStyled>
    </form>
  );
};
