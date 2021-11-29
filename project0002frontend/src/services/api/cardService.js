import axios from "axios";
import { API_URL } from "utils/constants/config";


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


const cardService = {
    getSetList,
    getExpansionList,
    getSetData
};

export default cardService;