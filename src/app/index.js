import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Route, Switch, Redirect} from "react-router-dom";

import Header from "./containers/header";
import Footer from "./containers/footer";
import MainSearch from "./containers/main-search";
import SearchResults from "./containers/search-results";
import SignInUp from "./containers/sign-in-up";
import CurrentHotel from "./containers/current-hotel";
import UserAccount from "./containers/user-account";
import BigPreloader from "./common/big-preloader";

import {
    getHotelInfoByIdAction,
    initAppAction, signOutAction,
    testFetchAction,
    toggleSignInUpModalAction
} from "../store/actions";

class App extends React.Component {

    render() {
        const {
            props: {
                isSignInUpOpen,
                signOutAction,
                toggleSignInUpModalAction,
                isLoggedIn,
                isAppPending
            }
        } = this;

        if (isAppPending) return <BigPreloader/>;

        return (
            <div className='main-page'>
                {
                    isSignInUpOpen &&
                    <SignInUp/>
                }
                <Header toggleSignInUpModalAction={toggleSignInUpModalAction}
                        isLoggedIn={isLoggedIn}
                        signOutAction={signOutAction}
                />
                <main>
                    <Switch>
                        <Route
                            path={'/'}
                            component={MainSearch}
                            exact
                        />
                        <Route
                            path={'/search-results'}
                            component={SearchResults}
                            exact
                        />
                        <Route
                            path={'/hotel/:id'}
                            component={CurrentHotel}
                            exact
                        />
                        <Route
                            path={'/user-account'}
                            component={UserAccount}
                            exact
                        />

                        <Redirect to={'/not-found'} />
                    </Switch>
                </main>
                <Footer />


            </div>
        );
    }
}



App.propTypes = {
    toggleSignInUpModalAction: PropTypes.func.isRequired,
    signOutAction: PropTypes.func.isRequired,
    testFetchAction: PropTypes.func.isRequired,
    initAppAction: PropTypes.func.isRequired,

    isSignInUpOpen: PropTypes.bool.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    isAppPending: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    isSignInUpOpen: state.AuthReducer.isSignInUpOpen,
    isLoggedIn: state.AuthReducer.isLoggedIn,
    hotHotels: state.HomeReducer.hotHotels,
    isAppPending: state.HomeReducer.isAppPending,
});
const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            initAppAction,
            toggleSignInUpModalAction,
            getHotelInfoByIdAction,
            testFetchAction,
            signOutAction

        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
