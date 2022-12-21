import axios from "axios";
import { CONSTANT } from "../constants/url";

const userAPI = axios.create({
  baseURL: CONSTANT.BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// Add a request interceptor
userAPI.interceptors.request.use(function (config) {
  console.log("request",config)
  return config;
}, function (error) {
  console.log("request error",error)
  return Promise.reject(error);
});

// Add a response interceptor
userAPI.interceptors.response.use(function (response) {
  console.log("response success",response);
  return response;
}, function (error) {
  console.log("response error",error)
  return Promise.reject(error);
});

export default userAPI;