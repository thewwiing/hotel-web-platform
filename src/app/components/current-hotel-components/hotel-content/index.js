import React from 'react';
import PropTypes from 'prop-types';
import HotelComments from './hotel-content-comments';
import HotelDescription from './hotel-content-description';
import AddComment from "./hotel-add-comment";
import HotelReservation from "./hotel-reservation";

class HotelContent extends React.Component {
    render() {
        const {
            props: {hotel}
        } = this;

        return (
            <div className='hotel-content-wrapper'>
                <div className="container">
                    <div className="hotel-content-container">

                        <div className="hotel-main-content">
                            <HotelDescription descr={hotel['descr']}/>
                            <HotelComments comments={hotel['commentsInfo']}/>
                            <AddComment />
                        </div>

                        <div className="hotel-add-content">
                            <HotelReservation/>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

HotelContent.propTypes = {
    hotel: PropTypes.object.isRequired
};

export default HotelContent;
