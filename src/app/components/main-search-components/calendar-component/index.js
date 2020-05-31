import React from 'react';
import PropTypes from 'prop-types';
import {faCalendarCheck, faCaretDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {parseDate} from "../../../../shared/helpers";


class CalendarComponent extends React.Component {

    render() {
        const {
            changeHandler,
            toggleCalendar,
            title,
            from,
            to,
            field,
            isOpen
        } = this.props;

        const date = field === 'from' ? from : to;

        return (
            <div className='calendar-wrapper'>
                <div className="calendar-input-wrapper"
                     onClick={toggleCalendar}
                >
                    <FontAwesomeIcon icon={faCalendarCheck}/>
                    <input type="text"
                           className="calendar-input"
                           readOnly={true}
                           placeholder={title}
                           value={parseDate(date)}
                    />
                    <FontAwesomeIcon icon={faCaretDown}/>
                </div>
                {
                   isOpen &&
                   <Calendar className='filter-calendar'
                             onChange={date => changeHandler(date, 'to')}
                             value={date}
                             minDate={field === 'to' ? from : null}
                             maxDate={field === 'from' ? to : null}
                   />
                }
            </div>
        );
    }
}

CalendarComponent.propTypes = {
    changeHandler: PropTypes.func.isRequired,
    toggleCalendar: PropTypes.func.isRequired,

    title: PropTypes.string.isRequired,
    field: PropTypes.string.isRequired,

    isOpen: PropTypes.bool.isRequired,
};

export default CalendarComponent;
