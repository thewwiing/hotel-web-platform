import API from '../../../request-service';
import {getHotelInfoByIdSuccessAction, getHotelsSuccessAction} from "../../../store/actions";

const hotelsController = {};

hotelsController.getHotels = (store, action) => {
    const {city, history, from, to, count, page} = action.payload;
    const body = {
        city,
        from: "6-4-2020",
        to: "30-4-2020",
        count,
        page
    };

    API.POST(
        'app/hotels/',
        body,
        (response) => {
            if (history) history.push('/search-results');
            store.dispatch(getHotelsSuccessAction(response));
        },
        (err) => console.log(err)

    )
};

hotelsController.getHotelInfoById = (store, action) => {
    const body = {
        hotel_id: action.payload
    };
    API.POST(
        'app/hotel/',
        body,
        (response) => {
            console.log(response.data);
            store.dispatch(getHotelInfoByIdSuccessAction(response.data));
        },
        (err) => console.log(err)
    );
};


export default hotelsController;
