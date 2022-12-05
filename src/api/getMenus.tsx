import apiInstance from "./authApit";

export const getMenus = () =>
  apiInstance.get("/menu").then((res) => res.data.Items);
