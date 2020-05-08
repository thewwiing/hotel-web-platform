import React from 'react';
import {
    faEnvelope,
    faPhone,
    faMapMarkerAlt,
    faPhoneVolume
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class TopFooter extends React.Component {
    render() {
        return (
            <div className='top-footer'>
                <div className="container">
                    <div className="footer-contacts">

                        <div className="footer-contacts-title">
                            О проекте
                        </div>

                        <div className="footer-cotacts-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi dolore ex, fugit illo nihil odio tempore? Ad blanditiis, dolorum eligendi est, expedita fuga inventore ipsam molestias nulla odio perferendis quae saepe sed similique velit voluptas voluptate! Architecto, eveniet, sit?
                        </div>

                        <div className="footer-contacts-contents">
                            <div className='footer-contact-item'>
                                <div>
                                    <FontAwesomeIcon icon={faEnvelope}/>
                                    <span>Почта:</span>
                                </div>
                                <div>
                                    kanatatkiyev@gmail.com
                                </div>
                            </div>

                            <div className='footer-contact-item'>
                                <div>
                                    <FontAwesomeIcon icon={faMapMarkerAlt}/>
                                    <span>Адрес:</span>
                                </div>
                                <div>
                                    Алматы, Каскелен
                                </div>
                            </div>

                            <div className='footer-contact-item'>
                                <div>
                                    <FontAwesomeIcon icon={faPhone}/>
                                    <span>Телефон:</span>
                                </div>
                                <div>
                                    +7(708)-508-08-99
                                </div>
                            </div>
                        </div>

                        <div className="footer-contacts-social">
                            <div className="footer-social-title">
                                НАЙДИТЕ НАС:
                            </div>
                            <div className="footer-social-content">
                                <div className='footer-social-item'>
                                    <FontAwesomeIcon icon={faPhone}/>
                                </div>
                                <div className='footer-social-item'>
                                    <FontAwesomeIcon icon={faPhone}/>
                                </div>
                                <div className='footer-social-item'>
                                    <FontAwesomeIcon icon={faPhone}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-help">
                        <div className='footer-help-text'>
                            <span>Поддержка</span>
                            <span>+7(747)4321254</span>
                        </div>
                        <button className="footer-help-btn">
                                <span>
                                    Позвонить
                                    <FontAwesomeIcon icon={faPhoneVolume}/>
                                </span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopFooter;
