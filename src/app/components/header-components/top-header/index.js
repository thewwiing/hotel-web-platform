import React from 'react';
import PropTypes from 'prop-types';
import {faMapMarkerAlt, faSignInAlt, faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class TopHeader extends React.Component {
    render() {
        const {
            props: {toggleSignInUpModalAction}
        } = this;

        return(
            <div className='header-top'>
                <div className="header-logo-wrapper">
                    <div className='header-logo-content'>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <div className="header-logo-text">
                            <span>EASY</span>
                            <span>HOTEL</span>
                        </div>
                    </div>
                </div>
                <div className="header-details">
                    <button className='header-auth-btn'
                            onClick={() => toggleSignInUpModalAction(true)}
                    >
                        <FontAwesomeIcon icon={faSignInAlt} />
                        Войти
                    </button>
                    <button className='header-add-btn'>
                        Добавить отель
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
            </div>
        );
    }
}

TopHeader.propTypes = {
    toggleSignInUpModalAction: PropTypes.func.isRequired
};

export default TopHeader;
