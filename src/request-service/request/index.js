export const makeRequest = (api, init, successCb, errorCb) => {
    fetch(api, init)
        .then((response) => checkStatus(response))
        .then((response) => response.json())
        .then((data) => successCb(data))
        .catch((error) => errorCb(error))
};

export const checkStatus = (response) => {
    if (response.status >= 200 && response.status <= 500) {
        if (response.status === 200) return Promise.resolve(response);
        else return Promise.reject(new Error(response.statusText));
    } else {
        return Promise.reject(new Error(response.statusText));
    }
};

export const setHeader = (method, params = null) => {
    const token = localStorage.getItem('accessToken');
    const init = {
        method,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
    };

    if (token) init.headers.Authorization = 'Bearer ' + token;
    if (params) init.body = JSON.stringify(params);

    return init;
};
