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

    render() {
        const {
            state: {activeNav},
            props: {history, isLoggedIn, signOutAction}
        } = this;

        if (!isLoggedIn) return <Redirect to={'/'}/>;

        return (
            <section className="user-account">
                <UserHeader activeNav={activeNav}
                            changeNav={(activeNav) => this.setState({activeNav})}
                            signOutAction={signOutAction}
                />
                <UserContent activeNav={activeNav}/>
            </section>
        );
    }
}

UserAccount.propTypes = {
    signOutAction: PropTypes.func.isRequired,

    history: PropTypes.object.isRequired,
    isLoggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    isLoggedIn: state.AuthReducer.isLoggedIn
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
