import axiosClient from "./axiosClient";

const serviceApi = {
  createService: (data, accessToken) => {
    const url = `/v1/service/register`;
    return axiosClient.post(url, data, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
  getAllService: (status) => {
    const url = `/v1/service?status=${status}`;
    return axiosClient.get(url);
  },
  updateService: (serviceId, data, accessToken) => {
    const url = `/v1/service/${serviceId}`;
    return axiosClient.put(url, data, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
  deleteService: (serviceId, accessToken) => {
    const url = `/v1/service/${serviceId}`;
    return axiosClient.delete(url, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
};

export default serviceApi;
