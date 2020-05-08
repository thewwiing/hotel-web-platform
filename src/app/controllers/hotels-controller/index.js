import API from '../../../request-service';

const hotelsController = {};

hotelsController.getHotelInfoById = (store, action) => {
    const body = {
        hotel_id: 1
    };
    API.POST(
        'app/hotel/',
        body
    );
};


export default hotelsController;
