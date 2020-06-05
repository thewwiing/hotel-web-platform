import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faMapMarkerAlt, faStar
} from "@fortawesome/free-solid-svg-icons";

import defaultLogo from '../../../../../assets/images/default-images/hotel-placeholder-logo.jpg';
import {withRouter} from "react-router";

class FavouritesItem extends React.Component {
    getStars = () => {
        let res = [];
        for (let i = 0; i < this.props.hotel.stars; i++) res.push(faStar);
        return res;
    };

    render() {
        const {hotel, history} = this.props;
        const logo = hotel['logo'] ? hotel['logo'] : defaultLogo;

        return (
            <div className='user-favourites-item'>
                <img src={logo}
                     alt=""
                     onClick={() => history.push(`/hotel/${hotel['hotel_id']}`)}
                />

                <div className='favourites-content'>
                    <div className='favourites-content-stars'>
                        {
                            this.getStars().map(item => <FontAwesomeIcon icon={item}/>)
                        }
                    </div>
                    <div className="favourites-content-name"
                         onClick={() => history.push(`/hotel/${hotel['hotel_id']}`)}
                    >
                        {hotel['name']}
                    </div>
                    <div className="favourites-content-address">
                        <FontAwesomeIcon icon={faMapMarkerAlt}/>
                        <span>{hotel['street_address']}</span>
                    </div>
                </div>
            </div>
        );
    }
}

FavouritesItem.propTypes = {
    hotel: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default withRouter(FavouritesItem);
