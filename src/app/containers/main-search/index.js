import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators, compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {withParallax} from "../../common/parallax-component";
import {faStar, faMapMarkerAlt, faDotCircle, faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// import PersonCount from "../../components/main-search-components/person-count-component";
import CalendarComponent from "../../components/main-search-components/calendar-component";

import {
    getHotelsAction,
    setSearchFields
} from "../../../store/actions";

class MainSearch extends React.Component {

    state = {
        city: {value: ''},
        from: {value: null, isOpen: false},
        to: {value: null, isOpen: false},
        adultCount: "1",
        childCount: "0"
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {getHotelsAction, searchFields, history} = this.props;
        if (JSON.stringify(searchFields) !== JSON.stringify(prevProps.searchFields)) {
            getHotelsAction({...searchFields, history});
        }
    }

    changeHandler = (value, field) => {
        const state = this.state;
        if ((field === 'adultCount' || field === 'childCount') && !value) return;
        if (field === 'from' || field === 'to') state[field]['isOpen'] = false;

        state[field]['value'] = value;
        this.setState(state);
    };

    // controlPersonCounters = (type, field) => {
    //     const state = this.state;
    //     if (type === '-') {
    //         if (+state[field] < 2 && field === 'adultCount') return;
    //         if (+state[field] < 1 && field === 'childCount') return;
    //         state[field] = +state[field] - 1 + "";
    //     }
    //     else state[field] = +state[field] + 1 + "";
    //     this.setState(state);
    // };

    isAllValid = () => {
        const {city, from, to} = this.state;
        return city['value'] && from['value'] && to['value'];
    };

    search = () => {
        const {
            isAllValid,
            state: {city, from, to},
            props: {setSearchFields}
        } = this;

        if(isAllValid()) {
            setSearchFields([
                {value: city['value'], field: 'city'},
                {value: from['value'], field: 'from'},
                {value: to['value'], field: 'to'},
            ]);
        }
    };

    render() {
        const {
            state: {city, from, to}
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
                                   placeholder="Город..."
                                   onChange={e => this.changeHandler(e.target.value, 'city')}
                                   value={city['value']}
                            />
                            <FontAwesomeIcon icon={faDotCircle}/>
                        </div>
                        <CalendarComponent changeHandler={(date) => this.changeHandler(date, 'from')}
                                           toggleCalendar={() => this.setState({from: {...from, isOpen: !from['isOpen']}} )}
                                           title={'Дата заезда'}
                                           from={from['value']}
                                           to={to['value']}
                                           field={'from'}
                                           isOpen={from['isOpen']}
                        />
                        <CalendarComponent changeHandler={(date) => this.changeHandler(date, 'to')}
                                           toggleCalendar={() => this.setState({to: {...to, isOpen: !to['isOpen']}} )}
                                           title={'Дата выезда'}
                                           from={from['value']}
                                           to={to['value']}
                                           field={'to'}
                                           isOpen={to['isOpen']}
                        />
                        {/*<PersonCount adultCount={adultCount}*/}
                        {/*             childCount={childCount}*/}
                        {/*             controlPersonCounters={this.controlPersonCounters}*/}
                        {/*             changeHandler={this.changeHandler}*/}
                        {/*/>*/}
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

    history: PropTypes.object.isRequired,
    searchFields: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    searchFields: state.HotelsReducer.searchFields,
});
const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            setSearchFields,
            getHotelsAction
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)
    (compose(withParallax)(withRouter(MainSearch)));
