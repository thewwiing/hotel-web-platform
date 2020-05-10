import React from 'react';
import {
    faEnvelope,
    faPhone,
    faMapMarkerAlt,
    faPhoneVolume
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import instagram from "../../../../assets/images/icons/instagram.svg";

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
                            EasyHotel - дипломный проект, по поиску и бронированию
                            отелей в пределах нашей страны. Платформа представлена в виде
                            веб-сайта, сделанная на основе новейших и технологических
                            библиотек. Основой сайта состовляет фреймворк "React js" -
                            созданный компанией Facebook.
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
                                    <a href="tel:+7708-508-08-99">+7(708)-508-08-99</a>
                                </div>
                            </div>
                        </div>

                        <div className="footer-contacts-social">
                            <div className="footer-social-title">
                                НАЙДИТЕ НАС:
                            </div>
                            <div className="footer-social-content">
                                <a className='footer-social-item'
                                   href='https://www.instagram.com/sdukz/'
                                   rel='noopener noreferrer'
                                   target='_blank'
                                >
                                    <FontAwesomeIcon icon={faPhone}/>
                                </a>
                                <a className='footer-social-item'
                                   href='https://vk.com/sdukz'
                                   rel='noopener noreferrer'
                                   target='_blank'
                                >
                                    <FontAwesomeIcon icon={faPhone}/>
                                </a>
                                <a className='footer-social-item'
                                   href='https://www.facebook.com/Education.comFanPage/'
                                   rel='noopener noreferrer'
                                   target='_blank'
                                >
                                    <FontAwesomeIcon icon={faPhone}/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="footer-help">
                        <div className='footer-help-text'>
                            <span>Поддержка</span>
                            <a href='tel:+7747-432-12-54'>+7(747)4321254</a>
                        </div>
                        <button className="footer-help-btn">
                            <a href="tel:+7747-432-12-54">
                                <span>
                                    Позвонить
                                    <FontAwesomeIcon icon={faPhoneVolume}/>
                                </span>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopFooter;
