import * as actionTypes from '../../store/action-types';
import hotelsController from '../../app/controllers/hotels-controller'

export const CONTROLLERS = {
    [actionTypes.GET_HOTEL_INFO_BY_ID]: (store, action) => hotelsController.getHotelInfoById(store, action)
};
