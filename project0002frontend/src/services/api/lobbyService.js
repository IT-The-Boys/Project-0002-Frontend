import axios from "axios";
import { CAH_GAME_LIST, LOBBY_URL } from "utils/constants/config";


const getLobbyList = () => {
  return axios({
      method: "get",
      url: LOBBY_URL,
    })
};

const getGameList = () => {
  return axios({
      method: "get",
      url: CAH_GAME_LIST,
    })
};


const authService = {
    getLobbyList,
    getGameList
};

export default authService;