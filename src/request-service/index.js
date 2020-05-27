import {makeRequest, setHeader} from "./request";
import {METHODS} from "./methods";

const baseURL = 'http://warm-island-17864.herokuapp.com/';
const API = {};

API.GET_TEST = (url = '', successCb, errorCb) => {
    const api = url;
    const init = setHeader(METHODS.GET);
    makeRequest(api, init, successCb, errorCb);
};

API.GET = (url = '', successCb, errorCb) => {
    const api = baseURL + url;
    const init = setHeader(METHODS.GET);
    makeRequest(api, init, successCb, errorCb);
};

API.POST = (url = '', params = {}, successCb, errorCb) => {
    const api = baseURL + url;
    const init = setHeader(METHODS.POST, params);
    makeRequest(api, init, successCb, errorCb);
};


export default API;
