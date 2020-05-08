import React from 'react';
import PropTypes from 'prop-types';
import TopFooter from "../../components/footer-components/top-footer";
import BottomFooter from "../../components/footer-components/bottom-footer";

class Footer extends React.Component {
    render() {
        return (
            <footer className='footer'>
                <TopFooter/>
                <BottomFooter/>
            </footer>
        );
    }
}

export default Footer;
