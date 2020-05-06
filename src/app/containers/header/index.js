import React from 'react';
import PropTypes from 'prop-types';
import TopHeader from "../../components/header-components/top-header";
import MenuHeader from "../../components/header-components/menu-header";

class Header extends React.Component {
    render() {
        const {
            toggleSignInUpModalAction
        } = this.props;

        return (
            <header className='header'>
                <TopHeader toggleSignInUpModalAction={toggleSignInUpModalAction}/>
                <MenuHeader/>
            </header>
        );
    }
}

Header.propTypes = {
    toggleSignInUpModalAction: PropTypes.func.isRequired
};

export default Header;
