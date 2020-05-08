import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown, faUser, faEnvelope, faPaperPlane} from "@fortawesome/free-solid-svg-icons";

class AddComment extends React.Component {
    state = {
        emailField: {value: '', isFocused: false, isValid: true},
        nameField: {value: '', isFocused: false, isValid: true},
        textField: {value: '', isFocused: false, isValid: true},
    };

    changeHandler = (value, field) => {
        const state = this.state;
        state[field]['value'] = value;
        state[field]['isValid'] = true;
        this.setState(state);
    };

    submit = () => {
        const state = this.state;

        if(state['emailField']['value'].length < 4) state['emailField']['isValid'] = false;
        if(state['textField']['value'].length < 4) state['textField']['isValid'] = false;
        if(state['nameField']['value'].length < 4) state['nameField']['isValid'] = false;

        if (state['emailField']['isValid'] && state['nameField']['isValid'] && state['textField']['isValid']) {
            alert("Review was send");
        }

        this.setState(state);
    };

    render() {
        const {
            state: {nameField, textField, emailField}
        } = this;

        return (
            <div className='hotel-add-comm-wrapper hotel-cw' style={{marginTop: '10px'}}>
                <div className="h-cw-title-w">
                    <span>Оставить отзыв</span>
                    <FontAwesomeIcon icon={faCaretDown}/>
                </div>

                {/*
                    THERE ARE WILL BE RANKING RANGE
                */}

                <div className="hotel-comment-fields">
                    <div className="hotel-comment-main-fields">
                        <div className={`hotel-comment-field-item  ${!nameField['isValid'] ? 'error' : ''}`}>
                            <FontAwesomeIcon icon={faUser}/>
                            <input className={`${!nameField['isFocused'] ? 'default' : ''}  ${!nameField['isValid'] ? 'err-field' : ''}`}
                                   type="text"
                                   placeholder="Ваше имя"
                                   value={nameField['value']}
                                   onChange={e => this.changeHandler(e.target.value, 'nameField')}
                                   onFocus={() => this.setState({nameField: {...nameField, isFocused: true}})}
                                   onBlur={() => this.setState({nameField: {...nameField, isFocused: false}})}
                            />
                            {
                                !nameField['isValid'] &&
                                <div className="hotel-comment-error" style={{color: 'red'}}>
                                    Имя на валидно
                                </div>
                            }
                        </div>
                        <div className={`hotel-comment-field-item  ${!emailField['isValid'] ? 'error' : ''}`}>
                            <FontAwesomeIcon icon={faEnvelope}/>

                            <input className={`${!emailField['isFocused'] ? 'default' : ''}  ${!emailField['isValid'] ? 'err-field' : ''}`}
                                   type="text"
                                   placeholder="Ваша почта"
                                   value={emailField['value']}
                                   onChange={e => this.changeHandler(e.target.value, 'emailField')}
                                   onFocus={() => this.setState({emailField: {...emailField, isFocused: true}})}
                                   onBlur={() => this.setState({emailField: {...emailField, isFocused: false}})}
                            />
                            {
                                !emailField['isValid'] &&
                                <div className="hotel-comment-error" style={{color: 'red'}}>
                                    Почта на валидна
                                </div>
                            }
                        </div>
                    </div>
                    <div className="hotel-comment-text-area">
                        <textarea className={`${!textField['isFocused'] ? 'default' : ''}  ${!textField['isValid'] ? 'err-field' : ''}`}
                                  placeholder='Ваш отзыв...'
                                  value={textField['value']}
                                  onChange={e => this.changeHandler(e.target.value, 'textField')}
                                  onFocus={() => this.setState({textField: {...textField, isFocused: true}})}
                                  onBlur={() => this.setState({textField: {...textField, isFocused: false}})}
                        />
                        {
                            !textField['isValid'] &&
                            <div className="hotel-comment-error" style={{color: 'red'}}>
                                Минимум 4 символа
                            </div>
                        }
                    </div>

                    <button className='hotel-comment-submit'
                            onClick={this.submit}
                    >
                        <div>Отправить</div>
                        <div>
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </div>
                    </button>
                </div>

            </div>
        );
    }
}

AddComment.propTypes = {

};

const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {

        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);
