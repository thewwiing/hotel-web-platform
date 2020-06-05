import * as actionTypes from '../../action-types';

const initialState = {
    isUserLoggedIn: false,
    userInfo: {},
    favourites: [],
    passwordError: '',
    settingsSuccess: false
};

export default (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.GET_USER_INFO_SUCCESS: {
            return {
                ...state,
                userInfo: action.payload
            }
        }

        case actionTypes.GET_USER_FAVOURITES: {
            return {
                ...state,
                favourites: action.payload
            }
        }

        case actionTypes.CHANGE_PASSWORD_SUCCESS: {
            return {
                ...state,
                passwordError: '',
                settingsSuccess: true
            }
        }

        case actionTypes.CHANGE_PASSWORD_FAILED: {
            return {
                ...state,
                passwordError: 'Что-то пошло не так',
                settingsSuccess: false
            }
        }

        case actionTypes.CHECK_FOR_OLD_PASSWORD_FAILED: {
            return {
                ...state,
                passwordError: 'Старый пароль введен неверно!!!',
                settingsSuccess: false
            }
        }

        case actionTypes.CLEAR_SETTINGS: {
            return {
                ...state,
                passwordError: '',
                settingsSuccess: false
            }
        }

        default:
            return state;

    }
}
