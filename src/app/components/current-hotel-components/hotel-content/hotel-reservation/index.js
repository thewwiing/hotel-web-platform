import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown, faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import Select from 'react-select';
import {hotelSelectStyles} from "../../../../../shared/helpers";
import {setBookingsCount} from "../../../../../store/actions";

export default class HotelReservation extends React.Component {
    book = () => {
        // const {id, bookHotelAction} = this.props;
        // const start_date = localStorage.getItem('searchFields')['from'];
        // const end_date = localStorage.getItem('searchFields')['to'];
        //
        // bookHotelAction({
        //     hotel_id: id,
        //     start_date,
        //     end_date
        // });
        this.props.openFakeLoader();
        this.props.setBookingsCount(1);
        this.props.history.push('/user-account');
    };

    render() {
        const {isLoggedIn} = this.props;

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
                            options={[
                                {value: 0, label: "Эконом"},
                                {value: 0, label: "Бизнес"},
                                {value: 0, label: "Люкс"}
                            ]}
                        />
                    </div>
                    {/*<div className="hotel-reserve-field-item">*/}
                    {/*    <div className="reserve-title-wrapper">*/}
                    {/*        Дата заезда*/}
                    {/*    </div>*/}
                    {/*    <Select*/}
                    {/*        styles={hotelSelectStyles}*/}
                    {/*    />*/}
                    {/*</div>*/}
                </div>

                <div className="hotel-reserve-total">
                    <span>Общая сумма</span>
                    <div>
                        <span>60 000</span>
                        <span>тг</span>
                    </div>
                </div>

                <button className="hotel-reserve-submit"
                        disabled={!isLoggedIn}
                        onClick={this.book}
                >
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
    bookHotelAction: PropTypes.func.isRequired,

    isLoggedIn: PropTypes.bool.isRequired,

    id: PropTypes.func.isRequired
};
