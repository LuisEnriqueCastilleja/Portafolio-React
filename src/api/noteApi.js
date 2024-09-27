import axios from "axios";

export const noteApi = axios.create({
  baseURL: "https://localhost:44302/api",
});
