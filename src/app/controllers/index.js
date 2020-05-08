import * as actionTypes from '../../store/action-types';
import hotelsController from '../../app/controllers/hotels-controller';
import authController from '../../app/controllers/auth-controller';

export const CONTROLLERS = {
    [actionTypes.SIGN_UP]: (store, action) => authController.signUp(store, action),
    [actionTypes.SIGN_IN]: (store, action) => authController.signIn(store, action),

    [actionTypes.GET_HOTEL_INFO_BY_ID]: (store, action) => hotelsController.getHotelInfoById(store, action),
};
