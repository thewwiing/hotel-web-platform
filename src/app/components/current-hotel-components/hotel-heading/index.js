import React from 'react';
import PropTypes from 'prop-types';
import {faStar, faPhone, faMapMarkerAlt, faEnvelope, faCaretRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {compose} from "redux";
import {withParallax} from "../../../common/parallax-component";

class HotelHeading extends React.Component {
    componentDidMount() {
        this.initStyle();
    }

    initStyle = () => {
        const {hotel} = this.props;
        const wrapper = document.getElementById('hotel-heading-wrapper');
        wrapper.style['background-image'] = `linear-gradient(to bottom, rgba(6,27,65,0) 0%,rgba(6,27,65,0.95) 100%) ,url(${hotel['mainPhoto']})`;
    };

    getStarts = (count) => {
        let stars = [];
        for (let i = 0; i < count; i++) {
            stars.push(<FontAwesomeIcon key={i} icon={faStar}/>);
        }
        return stars;
    };

    render() {
        const {
            props: {hotel, history}
        } = this;

        return (
            <div className='hotel-heading-wrapper' id='hotel-heading-wrapper'>
                <div className="container">
                    <div className="hotel-heading-container">

                        {/*   HEADING   */}
                        <div className="hotel-heading-main">

                            {/*   HEADING--LEFT   */}
                            <div className="hotel-heading-info">
                                <div className="hotel-ranking">
                                    {
                                        this.getStarts(hotel['starsCount']).map(item => item)
                                    }
                                </div>

                                <div className="hotel-title">
                                    {hotel['name']}
                                </div>

                                <div className="hotel-contacts">
                                    <div className="hotel-contact-item">
                                        <FontAwesomeIcon icon={faPhone}/>
                                        <span>+7 {hotel['phone']}</span>
                                    </div>
                                    <div className="hotel-contact-item">
                                        <FontAwesomeIcon icon={faMapMarkerAlt}/>
                                        <span>{hotel['address']}</span>
                                    </div>
                                    <div className="hotel-contact-item">
                                        <FontAwesomeIcon icon={faEnvelope}/>
                                        <span>{hotel['email']}</span>
                                    </div>
                                </div>
                            </div>

                            {/*   HEADING---RIGHT   */}
                            <div className="hotel-heading-control">
                                <div className="hotel-rank-info">
                                    <div className="rank-info">
                                        <div>Очень хорошо</div>
                                        <div>{hotel['commentsInfo']['amount']} комментария</div>
                                    </div>
                                    <div className="rank-wrapper">
                                        <span>{hotel['rank']}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*   FOOTER   */}
                        <div className="hotel-heading-footer">
                            <div className="hotel-paths-wrapper">
                                <span onClick={() => history.push('/')}>Главная</span>
                                <FontAwesomeIcon icon={faCaretRight}/>
                                <span>{hotel['name']}</span>
                            </div>
                            <div className="hotel-price-wrapper">
                                <span>НОЧЬ</span>
                                <span>{hotel['price']} т</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

HotelHeading.propTypes = {
    hotel: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default compose(
    // withParallax
)(HotelHeading);
