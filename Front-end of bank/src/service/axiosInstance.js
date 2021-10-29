import axios from "axios";

function getToken() {
  let auth = localStorage.getItem("auth");
  if (auth) {
    auth = JSON.parse(auth);
  }
  return auth ? `Bearer ${auth.token}` : null;
}

const axiosInstance = axios.create({
  headers: {
    baseURL: "http://localhost:8080/kisiler",
    Authorization: getToken(),
    headers: {
    "Content-type": "application/json",
     },
  },
});

export default axiosInstance;