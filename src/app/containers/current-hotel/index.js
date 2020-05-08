import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import HotelHeading from "../../components/current-hotel-components/hotel-heading";
import HotelNav from "../../components/current-hotel-components/hotel-navigation";
import HotelContent from "../../components/current-hotel-components/hotel-content";

class CurrentHotel extends React.Component {
    state = {
      navIsFixed: false
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        // const nav = document.querySelector('.hotel-navigation');
        // const heading = document.querySelector('.hotel-content-wrapper');
        // if (heading.getBoundingClientRect().top <= 178) this.setState({navIsFixed: true});
        // if (heading.getBoundingClientRect().top > 178) this.setState({navIsFixed: false});
    };

    render() {
        const {
            state: {navIsFixed},
            props: {currentHotel}
        } = this;

        // console.log(navIsFixed);

        return (
            <section className='hotel-wrapper'>
                <HotelHeading hotel={currentHotel}/>
                <HotelNav isFixed={navIsFixed} />
                <HotelContent hotel={currentHotel}/>
            </section>

        );
    }
}

CurrentHotel.propTypes = {
    currentHotel: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    currentHotel: state.HotelsReducer.currentHotel
});
const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {

        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentHotel);
