import axios from "axios";
import { LOBBY_URL } from "utils/constants/config";


const getLobbyList = () => {
  console.log(LOBBY_URL)
  return axios({
      method: "get",
      url: LOBBY_URL,
    })
};


const authService = {
    getLobbyList
};

export default authService;