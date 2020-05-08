import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";

class HotelDescription extends React.Component {
    render() {
        const {descr} = this.props;

        const styles = {
            color: '#878C9F',
            fontSize: '15px',
        };

        return (
            <div className='hotel-descr-wrapper hotel-cw' style={{marginBottom: '10px'}}>
                <div className="descr-title-wrapper h-cw-title-w">
                    <div className='descr-title-text'>
                        <span>Об отеле</span>
                    </div>
                    <FontAwesomeIcon icon={faCaretDown}/>
                </div>

                <div className="hotel-descr-text" style={styles}>
                    {descr}
                </div>

            </div>
        );
    }
}

HotelDescription.propTypes = {
    descr: PropTypes.string.isRequired
};

export default HotelDescription;
