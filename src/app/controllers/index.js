import * as actionTypes from '../../store/action-types';

import hotelsController from '../../app/controllers/hotels-controller';
import authController from '../../app/controllers/auth-controller';
import homeController from '../../app/controllers/home-controller';
import userController from '../../app/controllers/user-controller';

export const CONTROLLERS = {
    [actionTypes.SIGN_UP]: (store, action) => authController.signUp(store, action),
    [actionTypes.SIGN_IN]: (store, action) => authController.signIn(store, action),
    [actionTypes.SIGN_OUT]: (store, action) => authController.signOut(store, action),

    [actionTypes.GET_USER_INFO]: (store, action) => userController.getUserInfo(store, action),

    [actionTypes.GET_HOTELS]: (store, action) => hotelsController.getHotels(store, action),
    [actionTypes.GET_HOTEL_INFO_BY_ID]: (store, action) => hotelsController.getHotelInfoById(store, action),

    'TEST_FETCH': (store, action) => homeController.testFetch(store, action)
};
