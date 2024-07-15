import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api/";
// axios.defaults.baseURL = "http://134.209.212.110:8000/api/";

let isRefreshing = false;

axios.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    if (error.response.status === 403 && !isRefreshing) {
      isRefreshing = true;

      const response = await axios.post(
        "refresh",
        {},
        { withCredentials: true }
      );

      if (response.status === 200) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.token}`;

        return axios(error.config);
      }
    }
    isRefreshing = false;
    return error;
  }
);
