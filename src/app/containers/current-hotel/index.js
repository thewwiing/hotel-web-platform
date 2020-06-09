import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {withRouter} from "react-router";

import HotelHeading from "../../components/current-hotel-components/hotel-heading";
import HotelNav from "../../components/current-hotel-components/hotel-navigation";
import HotelContent from "../../components/current-hotel-components/hotel-content";
import {
    bookHotelAction,
    clearCurrentHotelAction,
    getHotelInfoByIdAction,
    setBookingsCount
} from "../../../store/actions";
import BigPreloader from "../../common/big-preloader";

class CurrentHotel extends React.Component {
    state = {
      navIsFixed: false,
        isFakeLoaderOpen: false
    };

    componentDidMount() {
        const {getHotelInfoByIdAction, match: {params: {id}}} = this.props;
        getHotelInfoByIdAction(id);
        window.addEventListener('scroll', this.handleScroll);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {currentHotel: {prevCurrentHotel}} = prevProps;
        const {getHotelInfoByIdAction, currentHotel, match: {params: {id}}} = this.props;
        // if (!prevCurrentHotel && !currentHotel) getHotelInfoByIdAction(id);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        this.props.clearCurrentHotelAction();
    }

    handleScroll = () => {
        const heading = document.querySelector('.hotel-content-wrapper');
        // const footer = document.querySelector('.footer');

        if (heading && heading.getBoundingClientRect().top <= 110) this.setState({navIsFixed: true});
        if (heading && heading.getBoundingClientRect().top > 110) this.setState({navIsFixed: false});
    };

    render() {
        const {
            state: {navIsFixed, isFakeLoaderOpen},
            props: {
                bookHotelAction,
                currentHotel,
                history,
                isLoggedIn,
                setBookingsCount,
                match: {params: {id}}
            }
        } = this;

        if (isFakeLoaderOpen) return <BigPreloader/>;

        return (
            <section className='hotel-wrapper'>
                <HotelHeading hotel={currentHotel} history={history} />
                <HotelNav isFixed={navIsFixed}
                />
                <HotelContent hotel={currentHotel}
                              isLoggedIn={isLoggedIn}
                              bookHotelAction={bookHotelAction}
                              id={id}
                              openFakeLoader={() => this.setState({isFakeLoaderOpen: true})}
                              setBookingsCount={setBookingsCount}
                />
            </section>

        );
    }
}

CurrentHotel.propTypes = {
    getHotelInfoByIdAction: PropTypes.func.isRequired,
    clearCurrentHotelAction: PropTypes.func.isRequired,
    bookHotelAction: PropTypes.func.isRequired,

    currentHotel: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,

    isLoggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    currentHotel: state.HotelsReducer.currentHotel,
    isLoggedIn: state.AuthReducer.isLoggedIn,
});
const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            bookHotelAction,
            getHotelInfoByIdAction,
            clearCurrentHotelAction,
            setBookingsCount
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(
    withRouter(CurrentHotel)
);
