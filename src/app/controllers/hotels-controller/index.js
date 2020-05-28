import API from '../../../request-service';
import {getHotelsSuccessAction} from "../../../store/actions";

const hotelsController = {};

hotelsController.getHotels = (store, action) => {
    const {city, history} = action.payload;
    const body = {
        city,
        from: "6-4-2020",
        to: "30-4-2020",
    };

    API.POST(
        'app/hotels/',
        body,
        (response) => {
            console.log("HOTELS!!!", response);
            history.push('/search-results');
            store.dispatch(getHotelsSuccessAction());
        },
        (err) => console.log(err)

    )
};

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
