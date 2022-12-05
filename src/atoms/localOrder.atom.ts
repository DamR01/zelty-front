import { atom } from "recoil";
import { Product } from "../helpers/product.interface";

const localOrderState = atom<Product[]>({
  key: "todoListState",
  default: [],
});

export default localOrderState;
