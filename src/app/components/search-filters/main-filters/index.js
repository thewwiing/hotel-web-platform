import React from 'react';
import PropTypes from 'prop-types';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {parseDate} from "../../../../shared/helpers";

class MainFilters extends React.Component {
    state = {
        city: {value: ''},
        from: {value: null, isOpen: false},
        to: {value: null, isOpen: false},
    };

    fillFields = () => {
        const {searchFields} = this.props;
        this.setState({
            city: {value: searchFields['city'] || ''},
            from: {value: searchFields['from'] || null, isOpen: false},
            to: {value: searchFields['to'] || null, isOpen: false}
        });
    };

    componentDidMount() {
        this.fillFields();
    }

    changeHandler = (value, field) => {
        const state = this.state;
        state[field]['value'] = value;

        if (field === 'to' || field === 'from') state[field]['isOpen'] = false;
        this.setState(state);
    };

    submit = () => {
        const {
            props: {setSearchFields},
            state: {city, from, to}
        } = this;

        if (this.isAllValid()) {
            setSearchFields([
                {value: city['value'], field: 'city'},
                {value: from['value'], field: 'from'},
                {value: to['value'], field: 'to'}
            ])
        }
    };

    isAllValid = () => {
        const {city, from, to} = this.state;
        return city['value'] && from['value'] && to['value'];
    };

    render() {
        const {
            submit,
            changeHandler,
            state: {city, from, to}
        } = this;

        return (
            <div className='main-search-filters'>
                <div className="main-filter-title">Найти</div>

                <div className="main-filters-fields">
                    <div className="main-f-field-item">
                        <span>Город</span>
                        <input type="text"
                               className='field-item'
                               value={city['value']}
                               onChange={(e) => changeHandler(e.target.value, 'city')}
                        />
                    </div>
                    <div className="main-f-field-item">
                        <span>Дата въезда</span>
                        <div className='field-item calendar-wrapper'
                             onClick={() => this.setState({from: {...from, isOpen: !from['isOpen']}} )}
                        >
                            <span>{parseDate(from['value'])}</span>
                        </div>
                        {
                            from['isOpen'] &&
                            <Calendar className='filter-calendar'
                                      onChange={date => changeHandler(date, 'from')}
                                      value={new Date(from['value'])}
                                      maxDate={new Date(to['value'])}
                            />
                        }
                    </div>
                    <div className="main-f-field-item">
                        <span>Дата отъезда</span>
                        <div className='field-item calendar-wrapper'
                             onClick={() => this.setState({to: {...to, isOpen: !to['isOpen']}} )}
                        >
                            <span>{parseDate(to['value'])}</span>
                        </div>
                        {
                            to['isOpen'] &&
                            <Calendar className='filter-calendar'
                                      onChange={date => changeHandler(date, 'to')}
                                      value={new Date(to['value'])}
                                      minDate={new Date(from['value'])}
                            />
                        }
                    </div>
                </div>

                <div className="main-filters-submit-row">
                    <button onClick={submit}>
                        Поиск
                    </button>
                </div>
            </div>
        );
    }
}

MainFilters.propTypes = {
    setSearchFields: PropTypes.func.isRequired,

    searchFields: PropTypes.object.isRequired
};

export default MainFilters;
