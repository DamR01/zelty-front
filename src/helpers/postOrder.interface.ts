import { Customer } from "./customer.interface";

export interface itemsOrder {
  id: string;
  options: string[];
  quantity: number;
}

export interface PostOrder {
  customer: Customer;
  order: itemsOrder[];
}
