import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {bindActionCreators} from "redux";

import {
    getUserFavouritesAction
} from "../../../../store/actions";

import UserContentHeader from '../user-content-header';
import FavouritesItem from './favourites-item';

class UserFavourites extends React.Component {
    componentDidMount() {
        this.props.getUserFavouritesAction();
    }

    render() {
        // const {favourites} = this.props;
        console.log(this.props.favourites);

        const favourites = [
            {
                hotel_id: 3213123,
                price: 32321,
                one_day_price: 323,
                name: "hotelname",
                street_address: "Brusilovksaya 44",
                rating: 3,
                wifi: true,
                parking: true,
                parking_free: true,
                breakfast: false,
                stars: 3
            },
            {
                hotel_id: 3213124,
                price: 32321,
                one_day_price: 323,
                name: "hotelname",
                street_address: "Brusilovksaya 44",
                rating: 3,
                wifi: true,
                parking: true,
                parking_free: true,
                breakfast: false,
                stars: 3
            },

        ];

        return (
            <div className='user-favourites'>
                <UserContentHeader title='Избранное'/>


                {
                    favourites.length !== 0
                        ? favourites.map(item => (
                            <FavouritesItem key={item['hotel_id']}
                                            hotel={item}
                            />
                        ))
                        : <div className='user-content-empty'>Результатов нет</div>
                }

            </div>
        );
    }
}

UserFavourites.propTypes = {
    getUserFavouritesAction: PropTypes.func.isRequired,

    favourites: PropTypes.array
};

const mapStateToProps = state => ({
    favourites: state.UserReducer.favourites
});
const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            getUserFavouritesAction
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(
    withRouter(UserFavourites));

