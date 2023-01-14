import { atom } from "recoil";
import { Product } from "../helpers/product.interface";



const localOrderState = atom<Product[]>({
  key: "localOrder",
  default: [],
});

export default localOrderState;
