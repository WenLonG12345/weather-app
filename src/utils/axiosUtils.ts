import Axios, { AxiosError } from "axios";
import type { AxiosResponse } from "axios";

const { VITE_API_URL } = import.meta.env;

const axiosUtils = Axios.create({
  baseURL: VITE_API_URL,
});

axiosUtils.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response.data;
  },
  async (error: AxiosError): Promise<AxiosError | AxiosResponse> => {
    return Promise.reject(error.response?.data);
  }
);

export default axiosUtils;
