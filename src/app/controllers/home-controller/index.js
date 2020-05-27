import API from "../../../request-service";

const homeController = {};

homeController.testFetch = (store, action) => {
    API.GET_TEST(
        'https://jsonplaceholder.typicode.com/todos/1',
        (response) => {
            console.log(response);
        },
        (error) => console.log(error)

    )
};

export default homeController;


