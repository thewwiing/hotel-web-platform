import API from '../../../request-service';

const hotelsController = {};

hotelsController.getHotelInfoById = (store, action) => {
    const body = {
        email: "qwe@mail.com",
        password :"1506840n"
    };
    API.POST(
        `app/obtain-token`,
        body
    );
};


export default hotelsController;
