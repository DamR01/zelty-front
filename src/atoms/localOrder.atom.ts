import { atom } from "recoil";

export interface OrderItem {
  id: string;
  quantity: number;
  name: string;
  available_options?: string[];
  image: string;
  price: number;
}

const localOrderState = atom<OrderItem[]>({
  key: "localOrder",
  default: [],
});

export default localOrderState;
