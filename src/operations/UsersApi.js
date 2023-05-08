import axios from "axios";

axios.defaults.baseURL = "https://6458b7cb8badff578ef8b450.mockapi.io";

export const getUsers = () => {
  const res = axios.get("/users");
  console.log(res.data);
  return res.data;
};
