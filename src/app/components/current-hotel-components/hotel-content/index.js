import React from 'react';
import PropTypes from 'prop-types';

import HotelComments from './hotel-content-comments';
import HotelDescription from './hotel-content-description';
import AddComment from "./hotel-add-comment";
import HotelReservation from "./hotel-reservation";
import {getPrice} from "../../../../shared/helpers";
import {withRouter} from "react-router";
import {setBookingsCount} from "../../../../store/actions";

class HotelContent extends React.Component {
    render() {
        const {
            props: {hotel, isLoggedIn, bookHotelAction, id, openFakeLoader, history, setBookingsCount}
        } = this;

        return (
            <div className='hotel-content-wrapper'>
                <div className="container">
                    <div className="hotel-content-container">

                        <div className="hotel-main-content">
                            <HotelDescription descr={hotel ? hotel['descr'] : ''}/>
                            <HotelComments comments={hotel['commentsInfo']}/>
                            <AddComment isLoggedIn={isLoggedIn}/>
                        </div>

                        <div className="hotel-add-content">
                            <HotelReservation bookHotelAction={bookHotelAction}
                                              isLoggedIn={isLoggedIn}
                                              id={id}
                                              openFakeLoader={openFakeLoader}
                                              history={history}
                                              setBookingsCount={setBookingsCount}
                            />
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

HotelContent.propTypes = {
    bookHotelAction: PropTypes.func.isRequired,

    hotel: PropTypes.object.isRequired,

    isLoggedIn: PropTypes.bool.isRequired,

    id: PropTypes.string.isRequired
};

export default withRouter(HotelContent);
