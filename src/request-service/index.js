import {makeRequest, setHeader} from "./request";
import {METHODS} from "./methods";

const baseURL = 'http://warm-island-17864.herokuapp.com/';
const API = {};

API.GET = (url = '') => {
    const api = baseURL + url;
    const init = setHeader(METHODS.GET);
    makeRequest(api, init);
};

API.POST = (url = '', params = {}) => {
    const api = baseURL + url;
    const init = setHeader(METHODS.POST, params);
    makeRequest(api, init);
};


export default API;
