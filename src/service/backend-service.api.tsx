import axios from "../util/customize.api";
export const callPostLoginAPI = (username: string, password: string) => {
  return axios.post("/auth/login", {
    username: username,
    password: password,
  });
};

export const callAPIGetAllUserPaginate = () => {
  return axios.get(`users`, {});
};
export const getAccount = () => {
  return axios.get("auth/account", {});
};
