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

import {
    getHotelInfoByIdAction,
    initAppAction,
    toggleSignInUpModalAction
} from "../store/actions";

class App extends React.Component {
    static propTypes = {
        toggleSignInUpModalAction: PropTypes.func.isRequired,
        initAppAction: PropTypes.func.isRequired,
        isSignInUpOpen: PropTypes.bool.isRequired
    };
    componentDidMount() {
        // this.props.initAppAction();
        // this.props.getHotelInfoByIdAction();
    }

    render() {
        const {
            props: {
                isSignInUpOpen,
                toggleSignInUpModalAction
            }
        } = this;

        return (
            <div className='main-page'>
                {
                    isSignInUpOpen &&
                    <SignInUp/>
                }
                <Header toggleSignInUpModalAction={toggleSignInUpModalAction} />
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





const mapStateToProps = state => ({
    isSignInUpOpen: state.AuthReducer.isSignInUpOpen,
    hotHotels: state.HomeReducer.hotHotels
});
const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            initAppAction,
            toggleSignInUpModalAction,
            getHotelInfoByIdAction

        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
