import axios from "axios";

import { authTokenState } from "../atoms/auth.atom";

export const getProducts = () =>
  axios
    .get("https://mrhhju2mp8.execute-api.eu-west-1.amazonaws.com/products", {
      headers: { Authorization: `Bearer ${authTokenState}` },
    })
    .then((res) => res.data.data);
