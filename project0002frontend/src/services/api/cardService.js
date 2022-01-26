import axios from "axios";
import { API_URL } from "utils/constants/config";
import authHeader from "./authHeader";


const getSetList = (gameName, setExpansion) => {
    const SET_URL = API_URL + `${gameName}/set`;
    return axios({
        method: "get",
        url: SET_URL,
        params: {
            filterAnd: "setExpansion|eq|"+setExpansion,
            filterOr: ""
        }
    })
};

const getExpansionList = (gameName) => {
    const SET_URL = API_URL + `${gameName}/set_expansions`;
    return axios({
        method: "get",
        url: SET_URL
    })
};

const getSetData = (gameName, setId) => {
    const SET_URL = API_URL + `${gameName}/set/${setId}`;
    return axios({
        method: "get",
        url: SET_URL
    })
};

const postCardData = (gameName, data) => {
    const _URL = API_URL + `${gameName}/set/card`;
    return axios({
        method: "post",
        url: "http://127.0.0.1:8080/api/v1/CAH/card",
        data: data,
        headers: authHeader()
    })
};

const cardService = {
    getSetList,
    getExpansionList,
    getSetData,
    postCardData
};

export default cardService;