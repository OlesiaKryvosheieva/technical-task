import axios from "axios";

axios.defaults.baseURL = "https://6458b7cb8badff578ef8b450.mockapi.io";

export const getUsers = async (page) => {
  const res = await axios.get(`/users?page=${page}&limit=3`);

  return res.data;
};
