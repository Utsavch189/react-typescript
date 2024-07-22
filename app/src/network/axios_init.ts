import axios from "axios";

export const base_url="http://localhost:8000";

export const public_axios=axios.create({
    baseURL:base_url
});

public_axios?.interceptors?.request?.use(
    async (config) => {
      console.log("Axios request config:", config);
      return config;
    },
    (error) => {
      console.log("Axios error:", error);
      return Promise.reject(error);
    }
  );  

public_axios?.interceptors?.response?.use(async(res) => {
    console.log("Axios response:", res);
    return res;
  }, err => {
    console.log("Axios error:", err);
    throw err;
  });