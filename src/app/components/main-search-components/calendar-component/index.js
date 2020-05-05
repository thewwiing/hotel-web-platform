import React from 'react';
import {faCalendarCheck, faCaretDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {DateRangePicker} from "react-dates";


class CalendarComponent extends React.Component {
    state = {
        isCalendarOpen: false,
        focusedInput: false,
        startDate: null,
        endDate: null,
    };

    toggleCalendar = (e) => {
      this.setState({isCalendarOpen: !this.state.isCalendarOpen})
    };

    render() {
        const {
            props: {changeHandler},
            state: {isCalendarOpen}
        } = this;

        return (
            <div className='calendar-wrapper'>
                <div className="calendar-input-wrapper"
                    onClick={e => this.toggleCalendar(e)}
                >
                    <FontAwesomeIcon icon={faCalendarCheck}/>
                    <input type="text"
                           className="calendar-input"
                           readOnly={true}
                           placeholder={'Дата'}
                    />
                    <FontAwesomeIcon icon={faCaretDown}/>
                </div>
                {
                   isCalendarOpen &&
                   <div className="calendar-content">
                       {/*<DateRangePicker*/}
                       {/*    startDate={this.state.startDate} // momentPropTypes.momentObj or null,*/}
                       {/*    startDateId="startDate"*/}
                       {/*    endDate={this.state.endDate} // momentPropTypes.momentObj or null,*/}
                       {/*    endDateId="endDate"*/}
                       {/*    onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,*/}
                       {/*    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,*/}
                       {/*    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,*/}
                       {/*/>*/}
                   </div>
                }
            </div>
        );
    }
}

export default CalendarComponent;
