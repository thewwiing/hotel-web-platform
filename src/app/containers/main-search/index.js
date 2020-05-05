import React from 'react';
import {compose} from "redux";
import {withParallax} from "../../common/parallax-component";
import {faStar, faMapMarkerAlt, faDotCircle, faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PersonCount from "../../components/main-search-components/person-count-component";
import CalendarComponent from "../../components/main-search-components/calendar-component";
import {withRouter} from "react-router";
import PropTypes from 'prop-types';

class MainSearch extends React.Component {
    static propTypes = {
        history: PropTypes.object.isRequired
    };

    state = {
        hotel: "",
        date: new Date(),
        adultCount: "1",
        childCount: "0"
    };

    changeHandler = (value, field) => {
        const state = this.state;
        if ((field === 'adultCount' || field === 'childCount') && !value) return;

        state[field] = value;
        this.setState(state);
    };

    controlPersonCounters = (type, field) => {
        const state = this.state;
        if (type === '-') {
            if (+state[field] < 2 && field === 'adultCount') return;
            if (+state[field] < 1 && field === 'childCount') return;
            state[field] = +state[field] - 1 + "";
        }
        else state[field] = +state[field] + 1 + "";
        this.setState(state);
    };


    render() {
        const {
            props: {history},
            state: {hotel, date, adultCount, childCount}
        } = this;

        return(
            <div className='search-wrapper'>
                <div className="search-content">
                    <div className="search-heading">

                        <div className="search-brand">
                            <span>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                            </span>
                        </div>
                        <div className="search-title">
                            EasyHotel - платформа отелей
                        </div>
                        <div className="search-descr">
                            Начните путешествовать по Казахстану вместе с нами
                        </div>

                    </div>
                    <div className="search-fields">
                        <div className="input-wrapper">
                            <FontAwesomeIcon icon={faMapMarkerAlt}/>
                            <input type="text"
                                   className="search-city-input"
                                   placeholder="Отель..."
                                   onChange={e => this.changeHandler(e.target.value, 'hotel')}
                                   value={hotel}
                            />
                            <FontAwesomeIcon icon={faDotCircle}/>
                        </div>
                        <CalendarComponent changeHandler={this.changeHandler}

                        />
                        <PersonCount adultCount={adultCount}
                                     childCount={childCount}
                                     controlPersonCounters={this.controlPersonCounters}
                                     changeHandler={this.changeHandler}
                        />
                        <button className='search-btn'
                                onClick={() => history.push('search-results')}
                        >
                            Поиск
                            <FontAwesomeIcon icon={faSearch}/>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default compose(
    withParallax
)(withRouter(MainSearch));
