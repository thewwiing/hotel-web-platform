import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from "react-router";
import {faMapMarkerAlt, faWifi, faParking, faUtensils, faHeart, faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class SearchItem extends React.Component {

    render() {
        const {
            props: {hotel, history}
        } = this;

        return (
            <div className='result-item-wrapper'>

                {/* IMAGE OF HOTEL */}
                <div className="result-item-img-wrapper">
                    <img src={hotel['photo']} alt=""/>
                </div>
                {/* IMAGE OF HOTEL */}


                {/*  TEXT INFO  */}
                <div className="result-item-content">
                    <div className="result-item-title">
                        <span onClick={() => history.push(`/hotel/${hotel['id']}`)}>
                            {hotel['name']}
                        </span>
                        <div className='result-item-score'>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
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
                            <span>Очень хорошо</span>
                            <span>14 отзывов</span>
                        </div>
                        <div className="result-rank">
                            <span>{hotel['rank']}</span>
                        </div>
                    </div>
                    <div className="result-item-boxes">

                        {/*  SERVICES LIST  */}
                        <div className="result-item-services">
                            <div className="service-item">
                                <FontAwesomeIcon icon={faWifi} />
                            </div>
                            <div className="service-item">
                                <FontAwesomeIcon icon={faParking} />
                            </div>
                            <div className="service-item">
                                <FontAwesomeIcon icon={faUtensils} />
                            </div>
                        </div>
                        {/*  SERVICES LIST  */}

                        {/* CONTROL BUTTONS */}
                        <div className="result-btn-boxes">
                            <button className='result-btn'>
                                <FontAwesomeIcon icon={faHeart}/>
                            </button>
                            <button className='result-btn'>
                                <FontAwesomeIcon icon={faMapMarkerAlt}/>
                            </button>
                        </div>
                        {/* CONTROL BUTTONS */}

                        <div className="result-price-box">
                            <span>Ночь </span>
                            <span>{hotel['price']}</span>
                        </div>
                    </div>
                </div>
                {/*  CONTROL PLACE  */}


            </div>
        );
    }
}

SearchItem.propTypes = {
    hotel: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default withRouter(SearchItem);
