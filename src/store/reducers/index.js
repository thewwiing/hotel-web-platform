import {combineReducers} from "redux";
import HomeReducer from './home-reducer';
import SearchResultsReducer from './search-results-reducer';
import UserReducer from './user-reducer';

export default combineReducers({
    HomeReducer,
    SearchResultsReducer,
    UserReducer
});
