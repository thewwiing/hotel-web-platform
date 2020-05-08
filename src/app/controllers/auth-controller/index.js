import API from '../../../request-service';

const authController = {};

authController.signUp = (store, action) => {

};

authController.signIn = (store, action) => {
    const {email, password} = action.payload;
    const body = {
        email,
        password
    };
    API.POST(
        'app/obtain_token/',
        body
    );
};


export default authController;
