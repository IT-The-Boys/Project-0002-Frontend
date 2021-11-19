import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/lobby/";

const getLobbyList = () => {
  return axios({
      method: "get",
      url: API_URL,
    })
};


const authService = {
    getLobbyList
};

export default authService;