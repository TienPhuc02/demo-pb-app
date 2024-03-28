import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8082/api/v1/",
  withCredentials: true,
  // headers: {
  //   Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  // },
});
instance.defaults.headers.common = {
  Authorization: `Bearer ${localStorage.getItem("access_token")}`,
};

const NO_RETRY_HEADER = "x-no-retry";
const handleRereshToken = async () => {
  const res = await instance.get("auth/refresh");
  console.log(res);
  if (res && res.data && res.data.access_token) {
    return res.data.access_token;
  } else {
    return null;
  }
};
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response && response.data ? response.data : response;
  },
  async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log(error);
    if (
      error.config &&
      error?.response &&
      +error?.response?.status === 401 &&
      +error?.response?.status === 400 &&
      +error?.response?.status === 403 &&
      !error?.config?.headers[NO_RETRY_HEADER]
    ) {
      const access_token = await handleRereshToken();
      error.config.headers[NO_RETRY_HEADER] = "true";
      if (access_token) {
        error.config.headers["Authorization"] = `Bearer ${access_token}`;
        localStorage.setItem("access_token", access_token);
        return instance.request(error.config);
      }
    }

    return error?.response?.data ?? Promise.reject(error);
  }
);
export default instance;
