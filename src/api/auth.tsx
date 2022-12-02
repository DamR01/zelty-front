import axios from "axios";

export const authentification = () =>
  axios
    .get("https://mrhhju2mp8.execute-api.eu-west-1.amazonaws.com/auth")
    .then((res) => res.data);
