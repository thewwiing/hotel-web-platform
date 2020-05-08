import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown, faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import Select from 'react-select';
import {hotelSelectStyles} from "../../../../../shared/helpers";

class HotelReservation extends React.Component {
    render() {
        return (
            <div className='hotel-reserve-wrapper hotel-cw'>
                <div className="h-cw-title-w">
                    <span>Забронировать</span>
                    <FontAwesomeIcon icon={faCaretDown}/>
                </div>

                <div className="hotel-reserve-fields">
                    <div className="hotel-reserve-field-item">
                        <div className="reserve-title-wrapper">
                            Тип комнаты
                        </div>
                        <Select
                            styles={hotelSelectStyles}
                        />
                    </div>
                    <div className="hotel-reserve-field-item">
                        <div className="reserve-title-wrapper">
                            Дата заезда
                        </div>
                        <Select
                            styles={hotelSelectStyles}
                        />
                    </div>
                </div>

                <div className="hotel-reserve-total">
                    <span>Общая сумма</span>
                    <div>
                        <span>60 000</span>
                        <span>тг</span>
                    </div>
                </div>

                <button className="hotel-reserve-submit">
                    <div>
                        <span>Book now</span>
                        <FontAwesomeIcon icon={faPaperPlane}/>
                    </div>
                </button>
            </div>
        );
    }
}

HotelReservation.propTypes = {

};

const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {

        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(HotelReservation);
