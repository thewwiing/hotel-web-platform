import React from 'react';
import PropTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUsers, faCaretDown, faChild, faMale} from "@fortawesome/free-solid-svg-icons";


class PersonCount extends React.Component {
    static propTypes = {
        childCount: PropTypes.string.isRequired,
        adultCount: PropTypes.string.isRequired,
        changeHandler: PropTypes.func.isRequired,
        controlPersonCounters: PropTypes.func.isRequired,

    };

    state = {
        isDropDownOpen: false
    };

    toggleDropdown = (e) => {
        if (!e.target.className || e.target.className === 'count-icon' || e.target.className === 'person-count-wrapper') {
            this.setState({isDropDownOpen: !this.state.isDropDownOpen});
        }
    };

    render() {
        const {
            state: {isDropDownOpen},
            props: {adultCount, childCount, changeHandler, controlPersonCounters}
        } = this;

        return (
            <div className='person-count-wrapper'
                 onClick={(e) => this.toggleDropdown(e)}
            >
                <div>
                    <FontAwesomeIcon icon={faUsers} className="count-icon"/>
                    <span>Персоны</span>
                    <FontAwesomeIcon icon={faCaretDown} className="count-icon"/>
                </div>
                {
                    isDropDownOpen &&
                    <div className='person-count-dropdown'>
                        <div className="count-dropdown-item">
                            <div className="dropdown-descr">
                                <FontAwesomeIcon icon={faMale}/>
                                <span className="descr-title">Взрослые</span>
                            </div>
                            <div className='count-wrapper'>
                                <input className='count-input'
                                       type="number"
                                       onChange={e => changeHandler(e.target.value, 'adultCount')}
                                       value={adultCount}
                                />
                                <div className="count-controllers">
                                    <div className="count-controller-item"
                                         onClick={() => controlPersonCounters('+', 'adultCount')}
                                    >
                                        <span className="descr-title">+</span>
                                    </div>
                                    <div className="count-controller-item"
                                         onClick={() => controlPersonCounters('-', 'adultCount')}
                                    >
                                        <span className="descr-title">-</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="count-dropdown-item">
                            <div className="dropdown-descr">
                                <FontAwesomeIcon icon={faChild}/>
                                <span className="descr-title">Дети</span>
                            </div>
                            <div className='count-wrapper'>
                                <input className='count-input'
                                       type="number"
                                       onChange={e => changeHandler(e.target.value, 'childCount')}
                                       value={childCount}
                                />
                                <div className="count-controllers">
                                    <div className="count-controller-item"
                                         onClick={() => controlPersonCounters('+', 'childCount')}
                                    >
                                        <span className="descr-title">+</span>
                                    </div>
                                    <div className="count-controller-item"
                                         onClick={() => controlPersonCounters('-', 'childCount')}
                                    >
                                        <span className="descr-title">-</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default PersonCount;
