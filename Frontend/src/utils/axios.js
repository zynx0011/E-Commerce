import axios from "axios";
import { BASE_URL } from "../../config";

export const api = axios.create({
  baseURL: `${BASE_URL}/api/v1`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// interceptors
api.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;
    // console.log(originalRequest, "originalRequest");
    if (
      error.response.status === 401 &&
      originalRequest &&
      !originalRequest._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        await axios.get(`${BASE_URL}/api/v1/users/refresh-token`, {
          withCredentials: true,
        });
        return api.request(originalRequest);
      } catch (err) {
        console.log(err);
      }
    }
    throw error;
  }
);
