import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {TransitionGroup, CSSTransition} from "react-transition-group";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCaretRight,
    faUser,
    faCalendarCheck,
    faThList,
    faBars
} from "@fortawesome/free-solid-svg-icons";

import UserCard from '../user-card';

class UserHeader extends React.Component {
    state = {
        isMobileMenuOpened: false
    };

    render() {
        const {
            state: {isMobileMenuOpened},
            props: {activeNav, changeNav, signOutAction}
        } = this;

        return (
            <div className='user-header'>
                <div className="container">

                    <div className="user-header-paths">
                        <span>Главная</span>
                        <FontAwesomeIcon icon={faCaretRight}/>
                        <span>Профиль</span>
                    </div>

                    <div className="user-header-content">
                        <UserCard signOutAction={signOutAction}/>

                        <ul className="user-header-nav">
                            <li className={`user-nav-item ${activeNav === 'profile' ? 'active' : ''}`}
                                onClick={() => changeNav('profile')}
                            >
                                <FontAwesomeIcon icon={faUser}/>
                                Профиль
                            </li>
                            <li className={`user-nav-item ${activeNav === 'saved' ? 'active' : ''}`}
                                onClick={() => changeNav('saved')}
                            >
                                <FontAwesomeIcon icon={faThList}/>
                                Избранное
                            </li>
                            <li className={`user-nav-item ${activeNav === 'bookings' ? 'active' : ''}`}
                                onClick={() => changeNav('bookings')}
                            >
                                <FontAwesomeIcon icon={faCalendarCheck}/>
                                Bookings
                            </li>
                            <li className={`user-nav-item ${activeNav === 'settings' ? 'active' : ''}`}
                                onClick={() => changeNav('settings')}
                            >
                                <FontAwesomeIcon icon={faThList}/>
                                Настройки
                            </li>
                        </ul>

                        <button className="user-nav-toggle"
                                onClick={() => this.setState({isMobileMenuOpened: !isMobileMenuOpened})}
                        >
                            Меню
                            <FontAwesomeIcon icon={faBars}/>
                        </button>

                        <CSSTransition
                            in={isMobileMenuOpened}
                            timeout={300}
                            classNames="fade"
                        >
                            <Fragment>
                                {
                                    isMobileMenuOpened &&
                                    <div className='user-mobile-menu'>
                                        <div className={`user-mobile-menu-item ${activeNav === 'profile' ? 'active' : ''}`}
                                             onClick={() => changeNav('profile')}
                                        >
                                            Главная
                                        </div>
                                        <div className={`user-mobile-menu-item ${activeNav === 'saved' ? 'active' : ''}`}
                                             onClick={() => changeNav('saved')}
                                        >
                                            Избранное
                                        </div>
                                        <div className={`user-mobile-menu-item ${activeNav === 'bookings' ? 'active' : ''}`}
                                             onClick={() => changeNav('bookings')}
                                        >
                                            Bookings
                                        </div>
                                        <div className={`user-mobile-menu-item ${activeNav === 'settings' ? 'active' : ''}`}
                                             onClick={() => changeNav('settings')}
                                        >
                                            Настройки
                                        </div>
                                    </div>
                                }
                            </Fragment>
                        </CSSTransition>

                    </div>


                </div>
            </div>
        );
    }
}

UserHeader.propTypes = {
    signOutAction: PropTypes.func.isRequired,

    changeNav: PropTypes.func.isRequired,
    activeNav: PropTypes.string.isRequired
};

export default UserHeader;
