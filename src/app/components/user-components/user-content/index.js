import React from 'react';
import PropTypes from 'prop-types';

import UserInfo from '../user-info';
import UserFavourites from '../user-favourites';
import UserBookings from '../user-bookings';
import UserSettings from '../user-settings';

class UserContent extends React.Component {
    render() {
        const {
            props: {activeNav}
        } = this;

        return (
            <div className='container'>
                <div className='user-content'>
                    {
                        activeNav === 'profile' &&
                        <UserInfo/>
                    }

                    {
                       activeNav === 'saved' &&
                       <UserFavourites/>
                    }

                    {
                        activeNav === 'bookings' &&
                        <UserBookings/>
                    }

                    {
                        activeNav === 'settings' &&
                        <UserSettings/>
                    }

                </div>
            </div>
        );
    }
}

UserContent.propTypes = {
    activeNav: PropTypes.string.isRequired
};

export default UserContent;
