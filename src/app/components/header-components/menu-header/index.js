import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faCaretDown, faBars} from "@fortawesome/free-solid-svg-icons";
import arrow from "../../../../assets/images/icons/triangle.png";
import {withRouter} from "react-router";
import PropTypes from "prop-types";

class MenuHeader extends React.Component {
    static propTypes = {
        history: PropTypes.object.isRequired
    };


    render() {
        const {
            props: {history}
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

                <div className="header-profile">
                    <div className="header-profile-wrapper">
                        <img src="https://avatars.mds.yandex.net/get-pdb/1705881/f8db19d4-c10e-4d27-83a3-db53d4f52430/s375" alt=""/>
                        <span>Мой аккаунт</span>
                        <FontAwesomeIcon icon={faCaretDown}/>
                        <ul className="header-profile-dropdown">
                            <li><span>Профиль</span></li>
                            <li><span>Bookings</span></li>
                            <li><span>Выйти</span></li>
                        </ul>
                    </div>
                </div>


            </div>
        );
    }
}

export default withRouter(MenuHeader);
