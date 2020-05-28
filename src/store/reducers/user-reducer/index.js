import * as actionTypes from '../../action-types';

const initialState = {
    isUserLoggedIn: false,
    userInfo: {}
};

export default (state = initialState, action) => {
    switch(action.type) {

        case actionTypes.GET_USER_INFO_SUCCESS: {
            return {
                ...state,
                userInfo: action.payload
            }
        }
        default:
            return state;

    }
}
