import axiosClient from "./axiosClient";

const adminApi = {
  registerAccount: (data, accessToken) => {
    const url = `/v1/admin/register-account`;
    return axiosClient.post(url, data, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
  changeStatusAccount: (accountId, data, accessToken) => {
    const url = `/v1/admin/change-status-account/${accountId}`;
    return axiosClient.put(url, data, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
  getAllAccounts: (accessToken) => {
    const url = `/v1/admin/accounts`;
    return axiosClient.get(url, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
};

export default adminApi;
