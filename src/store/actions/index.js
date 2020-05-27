import * as actionTypes from '../action-types';

export const initAppAction = payload => ({type: actionTypes.INIT_APP, payload});
export const testFetchAction = payload => ({type: 'TEST_FETCH', payload});

export const toggleSignInUpModalAction = payload => ({type: actionTypes.TOGGLE_SIGN_IN_UP_MODAL, payload});
export const signInAction = payload => ({type: actionTypes.SIGN_IN, payload});
export const signInSuccessAction = payload => ({type: actionTypes.SIGN_IN_SUCCESS, payload});
export const signUpAction = payload => ({type: actionTypes.SIGN_UP, payload});
export const signUpSuccessAction = payload => ({type: actionTypes.SIGN_UP_SUCCESS, payload});
export const signOutAction = payload => ({type: actionTypes.SIGN_OUT, payload});
export const signOutSuccessAction = payload => ({type: actionTypes.SIGN_OUT_SUCCESS, payload});

export const getHotelInfoByIdAction = payload => ({type: actionTypes.GET_HOTEL_INFO_BY_ID, payload});
export const getHotelInfoByIdSuccessAction = payload => ({type: actionTypes.GET_HOTEL_INFO_BY_ID_SUCCESS, payload});
