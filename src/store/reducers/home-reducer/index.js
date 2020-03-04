import * as actionTypes from '../../action-types';

const initialState = {
    hotHotels: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.INIT_APP: {
            return {
                ...state,
                hotHotels: action.payload
            }
        };
        default:
            return state;

    }
}
