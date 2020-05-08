export const makeRequest = (api, init) => {
    fetch(api, init)
        .then((response) => console.log(response));
};

export const setHeader = (method, params = null) => {
    const init = {
        method,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'accept': 'application/json',
            'mode': 'no-cors'
        },
    };

    if (params) init.body = JSON.stringify(params);
    return init;
};
