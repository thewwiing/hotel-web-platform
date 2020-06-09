import React from 'react';
import PropTypes from 'prop-types';
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class UserCard extends React.Component {

    render() {
        const {signOutAction, userInfo, favouritesCount} = this.props;


        return (
            <div className='user-card'>
                <div className="user-card-image">
                    <img src="https://whatmessenger.ru/s3/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg?b0a749c03fe00fd9b292c90620639415" alt=""/>
                </div>

                <div className="user-card-content">
                    <span>Welcome</span>

                    <span>
                        {userInfo['first_name'] || '' }
                        {userInfo['second_name'] || ''}
                    </span>
                </div>

                <div className="user-card-bottom">

                    <div className="user-card-stats">
                        <div className="card-stats-item">
                            <span>Bookings</span>
                            <span>{this.props.bookingsCount}</span>
                        </div>
                        <div className="card-stats-item">
                            <span>Избранное</span>
                            <span>{favouritesCount}</span>
                        </div>
                        <div className="card-stats-item">
                            <span>Отзывы</span>
                            <span>8</span>
                        </div>
                    </div>

                    <button className='user-card-btn'
                            onClick={signOutAction}
                    >
                        <span>ВЫЙТИ</span>
                        <FontAwesomeIcon icon={faSignOutAlt} />
                    </button>
                </div>
            </div>
        );
    }
}

UserCard.propTypes = {
    signOutAction: PropTypes.func.isRequired,

    userInfo: PropTypes.object.isRequired,

    favouritesCount: PropTypes.number.isRequired
};

export default UserCard;
