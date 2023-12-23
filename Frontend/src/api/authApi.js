import axiosClient from "./axiosClient";

const authApi = {
  login(data) {
    const url = "/v1/auth/login";
    return axiosClient.post(url, data, { withCredentials: true });
  },
};

export default authApi;
