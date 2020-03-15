import React from 'react';
import TopHeader from "../../components/header-components/top-header";
import MenuHeader from "../../components/header-components/menu-header";

class Header extends React.Component {
    render() {
        return (
            <header className='header'>
                <TopHeader/>
                <MenuHeader/>
            </header>
        );
    }
}

export default Header;
