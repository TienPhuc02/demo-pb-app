import axios from "../util/customize.api";
export const callPostLoginAPI = (username: string, password: string) => {
  const res = axios.post("/auth/login", {
    username: username,
    password: password,
  });
  return res;
};

export const callGetAllUserPaginate = (current: number, pageSize: number) => {
  
  const res = axios.get(`/users?current=${current}&pageSize=${pageSize}`, {
    headers: {
      Authorization:
        `Bearer ${localStorage.getItem("access_token")}`,
      Cookie:
        `refresh_token=${document.cookie}`,
    },
  });
  return res;
};
