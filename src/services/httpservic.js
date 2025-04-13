import axios from "axios";

const app = axios.create({
  baseURL: "https://server-hotel-production-e1e1.up.railway.app/api",
});

const http = {
  get: app.get,
  post: app.post,
  put: app.put,
  patch: app.patch,
  delete: app.delete,
};

export default http;
