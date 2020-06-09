import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faCaretDown, faBars} from "@fortawesome/free-solid-svg-icons";
import arrow from "../../../../assets/images/icons/triangle.png";
import {withRouter} from "react-router";
import PropTypes from "prop-types";

class MenuHeader extends React.Component {
    static propTypes = {
        history: PropTypes.object.isRequired,

        isLoggedIn: PropTypes.bool.isRequired
    };


    render() {
        const {
            props: {history, isLoggedIn, signOutAction}
        } = this;

        return(
            <div className='header-menu'>
                <div className="header-nav">
                    <div className="header-menu-icon" onClick={() => history.push('/')}>
                        <FontAwesomeIcon icon={faHome}/>
                    </div>
                    <div className="header-burger-wrapper">
                        <div className="header-burger-content">
                            <FontAwesomeIcon icon={faBars}/>
                        </div>
                    </div>
                    <nav className="header-nav-content">
                        <div className="nav-item">
                            Home
                            <FontAwesomeIcon icon={faCaretDown} />
                            <ul className="nav-item-dropdown">
                                <li><span>Lorem</span></li>
                                <li><span>Lorem</span></li>
                                <li><span>Lorem</span></li>
                            </ul>
                        </div>
                        <div className="nav-item">
                            Contacts
                            <FontAwesomeIcon icon={faCaretDown} />
                            <ul className="nav-item-dropdown">
                                <li><span>Lorem</span></li>
                                <li><span>Lorem</span></li>
                                <li><span>Lorem</span></li>
                            </ul>
                        </div>
                        <div className="nav-item">
                            About us
                            <FontAwesomeIcon icon={faCaretDown} />
                            <ul className="nav-item-dropdown">
                                <li><span>Lorem</span></li>
                                <li><span>Lorem</span></li>
                                <li><span>Lorem</span></li>
                            </ul>
                        </div>
                    </nav>
                </div>

                {
                    isLoggedIn &&
                    <div className="header-profile">
                        <div className="header-profile-wrapper">
                            <img src="https://whatmessenger.ru/s3/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg?b0a749c03fe00fd9b292c90620639415" alt=""/>
                            <span>Мой аккаунт</span>
                            <FontAwesomeIcon icon={faCaretDown}/>
                            <ul className="header-profile-dropdown">

                                <li onClick={() => history.push('/user-account')}>
                                    <span>Профиль</span></li>
                                <li>
                                    <span>Bookings</span>
                                </li>
                                <li onClick={signOutAction}>
                                    <span>Выйти</span>
                                </li>

                            </ul>
                        </div>
                    </div>
                }


            </div>
        );
    }
}

export default withRouter(MenuHeader);
