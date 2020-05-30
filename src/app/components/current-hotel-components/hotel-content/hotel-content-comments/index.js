import React from 'react';
import PropTypes from 'prop-types';
import {faCaretDown, faCalendarCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class HotelComments extends React.Component {
    render() {
        // const {comments} = this.props;
        const comments = [];

        return (
            <div className='hotel-comments-wrapper hotel-cw' style={{marginTop: '10px'}}>
                <div className="comment-title-wrapper h-cw-title-w">
                    <div className='comment-title-text'>
                        <span>Отызвы - </span>
                        <span>{comments && comments['amount']}</span>
                    </div>
                    <FontAwesomeIcon icon={faCaretDown}/>
                </div>
                {
                    comments.length && comments['comments'].map((comment, index) => (
                        <div className={`comment-content-item ${index === comments['comments'].length - 1 ? 'last' : ''}`}
                             key={index}
                        >
                            <div className="comment-main-photo">
                                <img src={comments.length && comment['photo']} alt=""/>
                            </div>
                            <div className="comment-inner">

                                <div className="comment-title">
                                    <div className="comment-add-photo">
                                        <img src={comments.length && comment['photo']} alt=""/>
                                        <span>{comments.length && comment['name']}</span>
                                    </div>
                                    <div className="comment-rank">
                                        <span>
                                            Очень хорошо
                                        </span>
                                        <div className="comment-rank-wrapper">
                                            <span>{comments.length && comment['rank']}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="comment-text">
                                    "{comments.length && comment['text']}"
                                </div>

                                <div className="comment-date">
                                    <FontAwesomeIcon icon={faCalendarCheck}/>
                                    {/*<span>{comments.length && comment['date']}</span>*/}
                                </div>
                            </div>
                        </div>
                    ))
                }

                {
                    comments['comments'].length === 0 &&
                    <div className='no-comments'>
                        Отзывов нет
                    </div>
                }
            </div>
        );
    }
}

HotelComments.propTypes = {
    comments: PropTypes.object.isRequired
};

export default HotelComments;
