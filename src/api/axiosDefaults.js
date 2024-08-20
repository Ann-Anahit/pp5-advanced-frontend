import axios from "axios";

axios.defaults.baseURL = 'https://pp5-advanced-frontend-a2e6d04127e3.herokuapp.com/'
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();