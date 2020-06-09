import API from '../../../request-service';
import {
    changePasswordAction,
    changePasswordFailedAction,
    changePasswordSuccessAction,
    checkForOldPasswordFailedAction,
    getUserBookingsSuccessAction,
    getUserFavouritesSuccessAction,
    getUserInfoAction,
    getUserInfoSuccessAction,
    updateUserInfoSuccessAction
} from "../../../store/actions";

const userController = {};

userController.getUserInfo = (store) => {

    API.POST(
        'app/profile/',
        {},
        (response) => {
            store.dispatch(getUserInfoSuccessAction(response.data));
        },
        (error) => console.log(error)
    );
};

userController.updateUserInfo = (store, action) => {

    API.POST(
        'app/update/',
        action.payload,
        () => {
            store.dispatch(getUserInfoAction());
            store.dispatch(updateUserInfoSuccessAction())
        },
        (error) => console.log(error)
    )
};

userController.addToFavourites = (store, action) => {
    const body = {
        hotel_id: action.payload
    };

    API.POST(
        'app/favourite/',
        body,
        () => {},
        (error) => console.log(error)
    );
};

userController.getUserFavourites = (store) => {

    API.POST(
        'app/my_favorites/',
        {},
        (response) => store.dispatch(getUserFavouritesSuccessAction(response.data)),
        (error) => console.log(error)
    );
};

userController.getUserBookings = (store) => {

    API.POST(
        'app/my_bookings/',
        {},
        (response) => store.dispatch(getUserBookingsSuccessAction(response.data)),
        (error) => console.log(error)
    );
};

userController.bookHotel = (store, action) => {
    const {hotel_id, start_date, end_date} = action.payload;
    const body = {
        hotel_id,
        start_date,
        end_date
    };

    API.POST(
        'app/book/',
        body,
        (response) => {
            console.log(response);
        },
        (error) => console.log(error)
    )
};

userController.checkForOldPassword = (store, action) => {
    const {new_password, old_password} = action.payload;
    const body = {
	    password: old_password
    };

    API.POST(
        'app/old_password/',
        body,
        (response) => {
            if (response.data === 'your password is not simply to old') {
                store.dispatch(checkForOldPasswordFailedAction());
            } else {
                store.dispatch(changePasswordAction(new_password))
            }
        },
        (error) => console.log(error)
    )
};

userController.changePassword = (store, action) => {
    const body = {
        password: action.payload
    };

    API.POST(
        'app/set_password/',
        body,
        (response) => {
            if (response.data === 'Password is successfully updated') {
                store.dispatch(changePasswordSuccessAction());
            } else {
                store.dispatch(changePasswordFailedAction);
            }
        },
        (error) => console.log(error)
    );
};

export default userController;
