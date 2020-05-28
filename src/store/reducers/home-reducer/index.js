import * as actionTypes from '../../action-types';

const initialState = {
    hotHotels: [],
    isAppPending: false
};

export default (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.INIT_APP: {
            return {
                ...state,
                hotHotels: action.payload
            }
        }
        case actionTypes.GET_HOTELS: {
            return {
                ...state,
                isAppPending: true
            }
        }
        case actionTypes.GET_HOTELS_SUCCESS: {
            return {
                ...state,
                isAppPending: false
            }
        }
        default:
            return state;

    }
}
