import apiInstance from "./authApit";

export const getOptions = () =>
  apiInstance.get("/options").then((res) => res.data.Items);
