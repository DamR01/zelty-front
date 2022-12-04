import apiInstance from "./authApit";

export const getProducts = () =>
  apiInstance.get("/products").then((res) => res.data.Items);
