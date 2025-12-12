import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

api.interceptors.request.use( config => {
  const token = import.meta.env.VITE_TOKEN;
  config.headers["Authorization"] = `Bearer ${token}`;
  return config;
})
export default api;