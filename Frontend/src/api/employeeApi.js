import axiosClient from "./axiosClient";

const employeeApi = {
  createEmployee: (data, accessToken) => {
    const url = `/v1/employee/register`;
    return axiosClient.post(url, data, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
  getAllEmployee: () => {
    const url = `/v1/employee/`;
    return axiosClient.get(url);
  },
  updateEmployee: (employeeId, data, accessToken) => {
    const url = `/v1/employee/${employeeId}`;
    return axiosClient.put(url, data, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
  deleteEmployee: (employeeId, accessToken) => {
    const url = `/v1/employee/${employeeId}`;
    return axiosClient.delete(url, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
};

export default employeeApi;
