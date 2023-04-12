import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const login = async (email, password) => {
  const res = await axiosInstance.post("login", {
    email,
    password,
  });
  const token = res.data.accessToken;
  return token;
};
