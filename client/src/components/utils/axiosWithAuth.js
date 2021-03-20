import axios from "axios";

export const axiosWithAuth = () => {
  const token = window.localStorage.getItem("token");

  return axios.create({
    headers: {
      Authorization: "howaboutthis",
    },
    baseURL: "http://localhost:2019",
  });
};
