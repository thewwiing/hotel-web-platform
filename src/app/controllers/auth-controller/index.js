import API from '../../../request-service';
import {signInAction, signInSuccessAction, signOutSuccessAction} from "../../../store/actions";

const authController = {};

authController.signUp = (store, action) => {
    const {email, password} = action.payload;

    API.POST(
        'app/create/',
        action.payload,
        () => store.dispatch(signInAction({email, password})),
        (error) => console.log(error)
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
            history.push('/user-account');
        },
        (error) => console.log(error)
    );
};

authController.signOut = (store) => {
    store.dispatch(signOutSuccessAction())
    // API.POST(
    //     '/',
    //     {},
    //     () => store.dispatch(signOutSuccessAction()),
    //     (error) => console.log(error)
    // );
};


export default authController;
