import * as actionTypes from '../action-types';

export const initAppAction = payload => ({type: actionTypes.INIT_APP, payload});
export const testFetchAction = payload => ({type: 'TEST_FETCH', payload});

export const toggleSignInUpModalAction = payload => ({type: actionTypes.TOGGLE_SIGN_IN_UP_MODAL, payload});

export const signInAction = payload => ({type: actionTypes.SIGN_IN, payload});
export const signInSuccessAction = payload => ({type: actionTypes.SIGN_IN_SUCCESS, payload});
export const signInFailedAction = payload => ({type: actionTypes.SIGN_IN_FAILED, payload});
export const signUpAction = payload => ({type: actionTypes.SIGN_UP, payload});
export const signUpSuccessAction = payload => ({type: actionTypes.SIGN_UP_SUCCESS, payload});
export const signUpFailedAction = payload => ({type: actionTypes.SIGN_UP_FAILED, payload});
export const signOutAction = payload => ({type: actionTypes.SIGN_OUT, payload});
export const signOutSuccessAction = payload => ({type: actionTypes.SIGN_OUT_SUCCESS, payload});
export const clearAuthErrors = payload => ({type: actionTypes.CLEAR_AUTH_ERRORS, payload});

export const getUserInfoAction = payload => ({type: actionTypes.GET_USER_INFO, payload});
export const getUserInfoSuccessAction = payload => ({type: actionTypes.GET_USER_INFO_SUCCESS, payload});
export const updateUserInfoAction = payload => ({type: actionTypes.UPDATE_USER_INFO, payload});
export const updateUserInfoSuccessAction = payload => ({type: actionTypes.UPDATE_USER_INFO_SUCCESS, payload});
export const bookHotelAction = payload => ({type: actionTypes.BOOK_HOTEL, payload});
export const bookHotelSuccessAction = payload => ({type: actionTypes.BOOK_HOTEL_SUCCESS, payload});
export const getUserBookingsAction = payload => ({type: actionTypes.GET_USER_BOOKINGS, payload});
export const getUserBookingsSuccessAction = payload => ({type: actionTypes.GET_USER_BOOKINGS_SUCCESS, payload});
export const getUserFavouritesAction = payload => ({type: actionTypes.GET_USER_FAVOURITES, payload});
export const getUserFavouritesSuccessAction = payload => ({type: actionTypes.GET_USER_FAVOURITES_SUCCESS, payload});
export const addFavouritesAction = payload => ({type: actionTypes.ADD_FAVOURITES, payload});
export const addFavouritesSuccessAction = payload => ({type: actionTypes.ADD_FAVOURITES_SUCCESS, payload});
export const checkForOldPasswordAction = payload => ({type: actionTypes.CHECK_FOR_OLD_PASSWORD, payload});
export const checkForOldPasswordSuccessAction = payload => ({type: actionTypes.CHECK_FOR_OLD_PASSWORD_SUCCESS, payload});
export const checkForOldPasswordFailedAction = payload => ({type: actionTypes.CHECK_FOR_OLD_PASSWORD_FAILED, payload});
export const changePasswordAction = payload => ({type: actionTypes.CHANGE_PASSWORD, payload});
export const changePasswordSuccessAction = payload => ({type: actionTypes.CHANGE_PASSWORD_SUCCESS, payload});
export const changePasswordFailedAction = payload => ({type: actionTypes.CHANGE_PASSWORD_FAILED, payload});
export const clearSettingsAction = payload => ({type: actionTypes.CLEAR_SETTINGS, payload})

export const setSearchFields = payload => ({type: actionTypes.SET_SEARCH_FIELDS, payload});
export const getHotelsAction = payload => ({type: actionTypes.GET_HOTELS, payload});
export const getHotelsSuccessAction = payload => ({type: actionTypes.GET_HOTELS_SUCCESS, payload});
export const getHotelInfoByIdAction = payload => ({type: actionTypes.GET_HOTEL_INFO_BY_ID, payload});
export const getHotelInfoByIdSuccessAction = payload => ({type: actionTypes.GET_HOTEL_INFO_BY_ID_SUCCESS, payload});
export const clearCurrentHotelAction = payload => ({type: actionTypes.CLEAR_CURRENT_HOTEL, payload});




export const clearUserInfo = payload => ({type: 'CLEAR_USER_INFO', payload});
export const setBookingsCount = payload => ({type: 'SET_BOOKINGS_COUNT', payload});
