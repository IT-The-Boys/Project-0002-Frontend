import axios from "axios";
import _decode from "jwt-decode";

const API_URL = "http://localhost:8080/api/v1/user/";

const register = (email, username, password) => {
  return axios({
      method: "post",
      url: API_URL + "signup",
      data: {
        "userName": username,
        "userContact": email,
        "password": password
      },
      headers: { "Content-Type": "application/json" },
    })
};

const guestLogin = (username, password) => {
  return axios.post(API_URL + "signup", {
    userName: username,
    password: password
  }
  )
};

const login = (username, password) => {
  const formData = new FormData();
  formData.append("userName", username)
  formData.append("password", password)
  return axios({
      method: "post",
      url: API_URL + "signin",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then((response) => {
      if (response.data.access_token) {
        let userData = _decode(response.data.access_token);
        userData["access_token"] = response.data.access_token;
        userData["refresh_token"] = response.data.refresh_token;
        localStorage.setItem("user", JSON.stringify(userData));
        return userData;
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  guestLogin,
  logout,
};

export default authService;