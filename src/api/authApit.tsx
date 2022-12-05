import axios from "axios";

const token = localStorage.getItem("access_token");

const apiInstance = axios.create({
  baseURL: "https://mrhhju2mp8.execute-api.eu-west-1.amazonaws.com",
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
export default apiInstance;
