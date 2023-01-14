import { CheckoutStyled } from "./Checkout.styled";
import { Input } from "../components/Atoms/Input";
import { Cart } from "../components/Organism/Cart";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {useRecoilValue} from "recoil";
import localOrderState from "../atoms/localOrder.atom";

export const Checkout = () => {
  const { register, handleSubmit } = useForm();
  const localOrder = useRecoilValue(localOrderState);
  const onSubmit = (data: any) => {

    const orderObjet = {
      customer: data,
      order:localOrder
    }
    console.log('orderObjet',orderObjet );
  };
  return (
    <form >
      <CheckoutStyled>
        <div>
          <Link to={"/"} className="zelty-checkout__back-link">
            Retour sur la page catalogue
          </Link>
          <h3 className="zelty-checkout__title">CHECKOUT</h3>
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
        </div>
        <Cart onSubmit={handleSubmit(onSubmit)}/>
      </CheckoutStyled>
    </form>
  );
};
