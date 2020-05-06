import * as actionTypes from '../action-types';

export const initAppAction = payload => ({type: actionTypes.INIT_APP, payload});

export const toggleSignInUpModalAction = payload => ({type: actionTypes.TOGGLE_SIGN_IN_UP_MODAL, payload});

export const getHotelInfoByIdAction = payload => ({type: actionTypes.GET_HOTEL_INFO_BY_ID, payload});
export const getHotelInfoByIdSuccessAction = payload => ({type: actionTypes.GET_HOTEL_INFO_BY_ID_SUCCESS, payload});
