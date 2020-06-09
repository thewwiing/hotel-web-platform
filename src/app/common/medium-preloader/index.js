import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const MediumPreloader = (props) => {
    const {type, width, height, color} = props;

    return (
        <div className='medium-preloader-wrapper'>
            <Loader
                type={type}
                color={color}
                height={height}
                width={width}
            />
        </div>
    )
};

MediumPreloader.propTypes = {
    type: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
};

export default MediumPreloader;
