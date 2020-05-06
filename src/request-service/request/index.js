export const makeRequest = (api, init) => {
    fetch(api, init)
        .then((response) => console.log(response));
};

export const setHeader = (method, params = null) => {
    const init = {
        method,
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json'
        },
    };

    if (params) init.body = JSON.stringify(params);
    return init;
};
