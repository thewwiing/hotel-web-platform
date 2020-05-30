import API from '../../../request-service';
import {
    signInAction,
    signInFailedAction,
    signInSuccessAction,
    signOutSuccessAction,
    signUpFailedAction
} from "../../../store/actions";

const authController = {};

authController.signUp = (store, action) => {
    const {email, password} = action.payload;

    API.POST(
        'app/create/',
        action.payload,
        () => store.dispatch(signInAction({email, password})),
        () => store.dispatch(signUpFailedAction())
    )
};

authController.signIn = (store, action) => {
    const {email, password, history} = action.payload;
    const body = {
        email,
        password
    };

    API.POST(
        'app/obtain_token/',
        body,
        (response) => {
            store.dispatch(signInSuccessAction());
            localStorage.setItem('accessToken', response.token);
            if (history.location.pathname === '/') history.push('/user-account');
        },
        () => store.dispatch(signInFailedAction())
    );
};

authController.signOut = (store) => {
    localStorage.removeItem('accessToken');
    store.dispatch(signOutSuccessAction())
    // API.POST(
    //     '/',
    //     {},
    //     () => store.dispatch(signOutSuccessAction()),
    //     (error) => console.log(error)
    // );
};


export default authController;
