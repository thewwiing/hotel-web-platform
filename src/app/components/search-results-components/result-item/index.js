import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from "react-router";
import {faMapMarkerAlt, faWifi, faParking, faUtensils, faHeart, faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import hotelDefaultImg from '../../../../assets/images/default-images/hotel-placeholder-logo.jpg';

import {
    getPrice,
    getRating,
    getRatingDescr
} from "../../../../shared/helpers";

class SearchItem extends React.Component {
    getStars = () => {
        let res = [];
        for (let i = 0; i < this.props.hotel.stars; i++) res.push(faStar);
        return res;
    };

    render() {
        const {
            props: {hotel, history, toggleFav}
        } = this;

        const logo = hotel && hotel['photo'] ? hotel['photo'] : hotelDefaultImg;

        return (
            <div className='result-item-wrapper'>

                {/* IMAGE OF HOTEL */}
                <div className="result-item-img-wrapper">
                    <img src={logo} alt=""/>
                </div>
                {/* IMAGE OF HOTEL */}


                {/*  TEXT INFO  */}
                <div className="result-item-content">
                    <div className="result-item-title">
                        <span onClick={() => history.push(`/hotel/${hotel['hotel_id']}`)}>
                            {hotel['name']}
                        </span>
                        <div className='result-item-score'>
                            {
                                this.getStars().map(item => <FontAwesomeIcon icon={item}/>)
                            }
                        </div>
                    </div>
                    <div className="result-item-address">
                        <FontAwesomeIcon icon={faMapMarkerAlt}/>   {hotel['location']}
                    </div>
                    <div className="result-item-descr">
                        {/*{hotel['descr']}*/}
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae deleniti dicta dolores ipsum, perferendis perspiciatis possimus quas quis ullam vel!
                    </div>
                </div>
                {/*  TEXT INFO  */}


                {/*  CONTROL PLACE  */}
                <div className="result-item-control">
                    <div className="result-rank-info">
                        <div className="result-rank-descr">
                            <span>{getRatingDescr(hotel['rank'])}</span>
                            <span>14 отзывов</span>
                        </div>
                        <div className="result-rank">
                            {/*<span>{getRating(hotel['rank'])}</span>*/}
                            <span>{hotel['rank']}</span>
                        </div>
                    </div>
                    <div className="result-item-boxes">

                        {/*  SERVICES LIST  */}
                        <div className="result-item-services">
                            {
                                hotel['wifi'] &&
                                <div className="service-item">
                                    <FontAwesomeIcon icon={faWifi} />
                                </div>
                            }
                            {
                                hotel['parking'] &&
                                <div className="service-item">
                                    <FontAwesomeIcon icon={faParking} />
                                </div>
                            }
                            {
                                hotel['breakfast'] &&
                                <div className="service-item">
                                    <FontAwesomeIcon icon={faUtensils} />
                                </div>
                            }
                        </div>
                        {/*  SERVICES LIST  */}

                        {/* CONTROL BUTTONS */}
                        <div className="result-btn-boxes">
                            <button className='result-btn'
                                    onClick={toggleFav}
                            >
                                <FontAwesomeIcon icon={faHeart}/>
                            </button>
                            <button className='result-btn'>
                                <FontAwesomeIcon icon={faMapMarkerAlt}/>
                            </button>
                        </div>
                        {/* CONTROL BUTTONS */}

                        <div className="result-price-box">
                            <span>Сутки </span>
                            <span>{getPrice(hotel['one_day_price'])} тг.</span>
                        </div>
                    </div>
                </div>
                {/*  CONTROL PLACE  */}


            </div>
        );
    }
}

SearchItem.propTypes = {
    toggleFav: PropTypes.func.isRequired,

    hotel: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default withRouter(SearchItem);
