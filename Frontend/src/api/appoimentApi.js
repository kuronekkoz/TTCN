import axiosClient from "./axiosClient";

const appointmentApi = {
  createAppointment: (data, accessToken) => {
    const url = `/v1/appointment/register`;
    return axiosClient.post(url, data, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
  getAllAppointment: (accessToken) => {
    const url = `/v1/appointment/`;
    return axiosClient.get(url, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
  updateAppointment: (appointmentId, data, accessToken) => {
    const url = `/v1/appointment/${appointmentId}`;
    return axiosClient.put(url, data, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
  deleteAppointment: (appointmentId, accessToken) => {
    const url = `/v1/appointment/${appointmentId}`;
    return axiosClient.delete(url, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
};

export default appointmentApi;
