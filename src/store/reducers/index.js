import {combineReducers} from "redux";
import HomeReducer from './home-reducer';
import HotelsReducer from './hotels-reducer';
import UserReducer from './user-reducer';
import AuthReducer from './auth-reducer';

export default combineReducers({
    HomeReducer,
    HotelsReducer,
    UserReducer,
    AuthReducer
});
