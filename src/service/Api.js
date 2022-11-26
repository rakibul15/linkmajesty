import axios from "axios";
import {getJWTToken} from "./helpers";


const API = axios.create({
  baseURL: 'http://34.27.11.233/v1/affiliate',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
})

API.interceptors.request.use(function (config) {
  config.headers.Authorization = `Bearer ${getJWTToken()}`;
  return config;
});

export default API;
