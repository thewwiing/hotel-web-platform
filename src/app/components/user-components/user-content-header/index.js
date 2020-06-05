import React from 'react';
import PropTypes from 'prop-types';

const UserContentHeader = (props) => {
    const {title} = props;

    return (
        <div className='user-content-header'>
            <h3>{title}</h3>
        </div>
    )
};

UserContentHeader.propTypes = {
    title: PropTypes.string.isRequired
};

export default UserContentHeader;
