import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators, compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {withParallax} from "../../common/parallax-component";
import {faStar, faMapMarkerAlt, faDotCircle, faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import PersonCount from "../../components/main-search-components/person-count-component";
import CalendarComponent from "../../components/main-search-components/calendar-component";

import {
    getHotelsAction
} from "../../../store/actions";


class MainSearch extends React.Component {

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

    search = () => {
        const {
            state: {hotel},
            props: {getHotelsAction, history}
        } = this;

        getHotelsAction({city: hotel, history})
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
                                    onClick={this.search}
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

MainSearch.propTypes = {
    getHotelsAction: PropTypes.func.isRequired,

    history: PropTypes.object.isRequired
};

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            getHotelsAction
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)
    (compose(withParallax)(withRouter(MainSearch)));
