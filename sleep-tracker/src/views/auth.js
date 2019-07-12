import axios from "axios";

export const authAxios = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    },
    baseURL: 'https://sleep-track1.herokuapp.com'
  });
};