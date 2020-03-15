import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faCaretDown} from "@fortawesome/free-solid-svg-icons";
import arrow from "../../../../assets/images/icons/triangle.png";

class MenuHeader extends React.Component {
    render() {
        return(
            <div className='header-menu'>
                <div className="header-nav">
                    <div className="header-menu-icon">
                        <FontAwesomeIcon icon={faHome}/>
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
            </div>
        );
    }
}

export default MenuHeader;
