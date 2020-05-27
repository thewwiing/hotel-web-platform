import React from 'react';
import PropTypes from 'prop-types';
import TopHeader from "../../components/header-components/top-header";
import MenuHeader from "../../components/header-components/menu-header";
import {signOutAction} from "../../../store/actions";

class Header extends React.Component {
    render() {
        const {
            toggleSignInUpModalAction,
            signOutAction,
            isLoggedIn
        } = this.props;

        return (
            <header className='header'>
                <TopHeader toggleSignInUpModalAction={toggleSignInUpModalAction}
                           isLoggedIn={isLoggedIn}
                />
                <MenuHeader isLoggedIn={isLoggedIn}
                            signOutAction={signOutAction}
                />
            </header>
        );
    }
}

Header.propTypes = {
    toggleSignInUpModalAction: PropTypes.func.isRequired,
    signOutAction: PropTypes.func.isRequired,

    isLoggedIn: PropTypes.bool.isRequired
};

export default Header;
