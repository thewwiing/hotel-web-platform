import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Redirect, withRouter} from "react-router";

import UserHeader from "../../components/user-components/user-header";
import UserContent from "../../components/user-components/user-content";

import {
    signOutAction
} from "../../../store/actions";

class UserAccount extends React.Component {
    state = {
        activeNav: 'profile'
    };

    componentDidMount() {
        window.scrollTo({top: 0})
    }

    render() {
        const {
            state: {activeNav},
            props: {userInfo, favourites, isLoggedIn, signOutAction, bookings_count}
        } = this;

        if (!isLoggedIn) return <Redirect to={'/'}/>;

        return (
            <section className="user-account">
                <UserHeader activeNav={activeNav}
                            changeNav={(activeNav) => this.setState({activeNav})}
                            signOutAction={signOutAction}
                            userInfo={userInfo}
                            favouritesCount={favourites.length}
                            bookingsCount={bookings_count}
                />
                <UserContent activeNav={activeNav}/>
            </section>
        );
    }
}

UserAccount.propTypes = {
    signOutAction: PropTypes.func.isRequired,

    history: PropTypes.object.isRequired,
    userInfo: PropTypes.object.isRequired,

    isLoggedIn: PropTypes.bool.isRequired,

    favourites: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    isLoggedIn: state.AuthReducer.isLoggedIn,
    userInfo: state.UserReducer.userInfo,
    favourites: state.UserReducer.favourites,
    bookings_count: state.UserReducer.bookings_count
});
const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            signOutAction
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(
    withRouter(UserAccount)
);
