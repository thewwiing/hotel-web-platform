import API from '../../../request-service';
import {getUserInfoSuccessAction} from "../../../store/actions";

const userController = {};

userController.getUserInfo = (store) => {

    API.POST(
        'app/profile/',
        {},
        (response) => {
            store.dispatch(getUserInfoSuccessAction());
            console.log("USER INFO!!!", response)
        },
        (error) => console.log(error)
    );
};


export default userController;
