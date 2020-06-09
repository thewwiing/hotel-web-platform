import React from 'react';
import PropTypes from 'prop-types';
import FavouritesItem from "../user-favourites/favourites-item";
import {getUserBookingsAction} from "../../../../store/actions";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {bindActionCreators} from "redux";

import UserContentHeader from "../user-content-header";

class UserBookings extends React.Component {
    componentDidMount() {
        this.props.getUserBookingsAction();
    }

    render() {
        const {bookings, history} = this.props;
        console.log(bookings);

        const hotel = {hotel_id: 1, name: 'Rixos', street_address: 'Almaty', photo: 'https://q-cf.bstatic.com/xdata/images/hotel/square600/71307723.webp?k=8dd2d202c20fe6efbaa76f9f5f0445e4b501900765749f9896d04c98e608b599&o=',
                descr: 'Лучший отель города', price: '50 000 тг', rank: '4.5', stars: 5
        };

        return (
            <div className='user-bookings'>
                <UserContentHeader title='Bookings'/>

                <FavouritesItem history={history} hotel={hotel}/>

            </div>
        );
    }
}

UserBookings.propTypes = {
    bookings: PropTypes.array,

    history: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    bookings: state.UserReducer.bookings
});
const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            getUserBookingsAction
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(
    withRouter(UserBookings));
