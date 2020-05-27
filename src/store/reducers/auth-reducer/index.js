import * as actionTypes from '../../action-types';

const initialState = {
    isLoggedIn: !!localStorage.getItem('accessToken'),
    isSignInUpOpen: false,
    isAuthPending: false
};

export default (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.TOGGLE_SIGN_IN_UP_MODAL: {
            return {
                ...state,
                isSignInUpOpen: action.payload
            }
        }
        case actionTypes.SIGN_UP: {
            return {
                ...state,
                isAuthPending: true
            }
        }
        case actionTypes.SIGN_IN: {
            return {
                ...state,
                isAuthPending: true
            }
        }
        case actionTypes.SIGN_IN_SUCCESS: {
            return {
                ...state,
                isLoggedIn: true,
                isAuthPending: false,
                isSignInUpOpen: false
            }
        }
        case actionTypes.SIGN_UP_SUCCESS: {
            return {
                ...state,
                isAuthPending: false
            }
        }
        case actionTypes.SIGN_OUT_SUCCESS: {
            return {
                ...state,
                isLoggedIn: false
            }
        }
        default:
            return state;

    }
}
