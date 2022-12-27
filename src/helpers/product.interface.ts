export interface Product {
  id: string;
  menuId: string; // Le menu auquel est rattaché le produit
  name: string;
  description: string;
  image: string;
  price: number; // Le prix en centimes
  available_options: string[]; // Les options disponibles
  sold_out: boolean; // Le produit n'est pas en stock
  quantity: number;
}
