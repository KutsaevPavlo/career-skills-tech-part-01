import axios from "axios";
axios.defaults.baseURL = "https://6458eab48badff578efea5fd.mockapi.io/";

export const getTweetUsers = async () => {
  const response = await axios.get("users");
  return response.data;
};
