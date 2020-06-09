import * as actionTypes from '../../action-types';

const initialState = {
    isUserLoggedIn: false,
    userInfo: {},
    favourites: [],
    bookings: [],
    passwordError: '',
    settingsSuccess: false,
    isUserPending: false,
    bookings_count: 0
};

export default (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.GET_USER_INFO: {
            return {
                ...state,
                isUserPending: true
            }
        }

        case actionTypes.GET_USER_INFO_SUCCESS: {
            return {
                ...state,
                userInfo: action.payload,
                isUserPending: false
            }
        }

        case actionTypes.GET_USER_BOOKINGS: {
            return {
                ...state,
                isUserPending: true
            }
        }

        case actionTypes.GET_USER_BOOKINGS_SUCCESS: {
            return {
                ...state,
                bookings: action.payload,
                isUserPending: false
            }
        }

        case actionTypes.GET_USER_FAVOURITES: {
            return {
                ...state,
                isUserPending: true
            }
        }

        case actionTypes.GET_USER_FAVOURITES_SUCCESS: {
            return {
                ...state,
                favourites: action.payload,
                isUserPending: false
            }
        }

        case actionTypes.CHANGE_PASSWORD: {
            return {
                ...state,
                isUserPending: true
            }
        }

        case actionTypes.CHANGE_PASSWORD_SUCCESS: {
            return {
                ...state,
                passwordError: '',
                settingsSuccess: true,
                isUserPending: false
            }
        }

        case actionTypes.CHANGE_PASSWORD_FAILED: {
            return {
                ...state,
                passwordError: 'Что-то пошло не так',
                settingsSuccess: false,
                isUserPending: false
            }
        }

        case actionTypes.CHECK_FOR_OLD_PASSWORD: {
            return {
                ...state,
                isUserPending: true
            }
        }

        case actionTypes.CHECK_FOR_OLD_PASSWORD_FAILED: {
            return {
                ...state,
                passwordError: 'Старый пароль введен неверно!!!',
                settingsSuccess: false,
                isUserPending: false
            }
        }

        case actionTypes.CLEAR_SETTINGS: {
            return {
                ...state,
                passwordError: '',
                settingsSuccess: false
            }
        }

        case 'CLEAR_USER_INFO': {
            return {
                ...state,
                userInfo: {}
            }
        }

        case 'SET_BOOKINGS_COUNT': {
            return {
                ...state,
                bookings_count: action.payload
            }
        }

        default:
            return state;

    }
}
