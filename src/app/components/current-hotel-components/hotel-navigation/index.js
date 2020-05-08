import React from 'react';
import PropTypes from 'prop-types';

class HotelNav extends React.Component {
    state = {
        type: 'top'
    };

    scrollTo = (type) => {
        const comments = document.querySelector('.hotel-comments-wrapper');
        const details = document.querySelector('.hotel-content-wrapper');

        switch(type) {
            case 'top': {
                window.scrollTo({top: 0, behavior: 'smooth'});
                this.setState({type});
                break;
            }
            case 'comments': {
                window.scrollTo({top: comments.offsetTop - 120, behavior: 'smooth'});
                this.setState({type});
                break;
            }
            case 'details': {
                window.scrollTo({top: details.offsetTop - 110, behavior: 'smooth'});
                this.setState({type});
                break;
            }
            default:
                break
        }
    };

    render() {
        const {
            props: {isFixed},
            state: {type}
        } = this;

        return (
            <div className={`hotel-navigation ${isFixed ? 'fixed' : ''}`}>
                <div className="container">
                    <div className="hotel-nav-content">
                        <button className={`hotel-nav-btv ${type === 'top' ? 'active' : ''}`}
                                onClick={() => this.scrollTo('top')}
                        >
                            Топ
                        </button>
                        <button className={`hotel-nav-btv ${type === 'details' ? 'active' : ''}`}
                                onClick={() => this.scrollTo('details')}
                        >
                            Детали
                        </button>
                        <button className={`hotel-nav-btv ${type === 'comments' ? 'active' : ''}`}
                                onClick={() => this.scrollTo('comments')}
                        >
                            Отзывы
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

HotelNav.propTypes = {
    isFixed: PropTypes.bool.isRequired
};

export default HotelNav;
