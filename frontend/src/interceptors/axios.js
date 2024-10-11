import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api/";
// axios.defaults.baseURL = "http://jckavanagh.com:8000/api/";
// axios.defaults.baseURL = "http://127.0.0.1:8000/api/";
// axios.defaults.baseURL = "http://134.209.212.110:8000/api/";
// axios.defaults.baseURL = "http://backend:8000/api/";
// axios.defaults.baseURL = process.env.REACT_APP_API_URL;
// axios.defaults.headers.post["Content-Type"] = "application/json";

let isRefreshing = false;

// axios.interceptors.response.use(
//   (resp) => resp,
//   async (error) => {
//     if (error.response.status === 403 && !isRefreshing) {
//       isRefreshing = true;

//       const response = await axios.post(
//         "refresh",
//         {},
//         { withCredentials: true }
//       );

//       if (response.status === 200) {
//         axios.defaults.headers.common[
//           "Authorization"
//         ] = `Bearer ${response.data.token}`;

//         return axios(error.config);
//       }
//     }
//     isRefreshing = false;
//     return error;
//   }
// );

axios.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    // Check if error.response exists
    if (error.response) {
      if (error.response.status === 403 && !isRefreshing) {
        isRefreshing = true;

        try {
          // Refresh token request
          const response = await axios.post(
            "refresh",
            {},
            { withCredentials: true }
          );

          if (response.status === 200) {
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${response.data.token}`;

            // Retry the original request
            return axios(error.config);
          }
        } catch (refreshError) {
          // Handle token refresh error
          console.error("Token refresh failed:", refreshError);
        } finally {
          isRefreshing = false;
        }
      }

      // Return error if not handling 403 or other cases
      return Promise.reject(error);
    } else {
      // Handle cases where error.response is undefined
      console.error("Network error or no response:", error);
      return Promise.reject(error);
    }
  }
);
