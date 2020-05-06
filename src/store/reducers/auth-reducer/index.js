import * as actionTypes from '../../action-types';

const initialState = {
    isSignInUpOpen: false
};

export default (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.TOGGLE_SIGN_IN_UP_MODAL: {
            return {
                ...state,
                isSignInUpOpen: action.payload
            }
        }
        default:
            return state;

    }
}
