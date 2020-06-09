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
        const {favourites} = this.props;

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

