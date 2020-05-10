import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCaretDown,
    faUser,
    faEnvelope,
    faPhone,
    faSave,
    faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";

class UserInfo extends React.Component {

    state = {
        emailField: {value: '', isFocused: false, isValid: true},
        phoneField: {value: '', isFocused: false, isValid: true},
        nameField: {value: '', isFocused: false, isValid: true},
        addressField: {value: '', isFocused: false, isValid: true},
    };

    changeHandler = (value, field) => {
        const state = this.state;

        if (field === 'phoneField' && value.length > 11) return;

        state[field]['value'] = value;
        state[field]['isValid'] = true;
        this.setState(state);
    };

    submit = () => {
        const state = this.state;

        if(state['emailField']['value'].length < 4) state['emailField']['isValid'] = false;
        if(state['phoneField']['value'].length < 11) state['phoneField']['isValid'] = false;
        if(state['nameField']['value'].length < 4) state['nameField']['isValid'] = false;
        if(state['addressField']['value'].length < 6) state['addressField']['isValid'] = false;

        if (state['emailField']['isValid'] && state['nameField']['isValid'] && state['phoneField']['isValid'] && state['addressField']['isValid']) {
            alert('saved');
        }
        this.setState(state);
    };

    render() {
        const {
            state: {nameField, emailField, addressField, phoneField}
        } = this;

        return (
            <div className='user-info'>
                <div className="user-info-title h-cw-title-w">
                    <span>Ваш профиль</span>
                    <FontAwesomeIcon icon={faCaretDown}/>
                </div>

                <div className="user-info-fields">
                    <div className={`user-info-item ${!nameField['isValid'] ? 'error' : ''}`}>
                        <span className={`${!nameField['isValid'] ? 'err-text' : ''}`}>Полное имя:</span>
                        <div className={`user-field-wrapper`}>
                            <FontAwesomeIcon icon={faUser}/>
                            <input className={`${!nameField['isFocused'] ? 'default' : ''}  ${!nameField['isValid'] ? 'err-field' : ''}`}
                                   type="text"
                                   placeholder='Имя Фамилия'
                                   value={nameField['value']}
                                   onChange={e => this.changeHandler(e.target.value, 'nameField')}
                                   onFocus={() => this.setState({nameField: {...nameField, isFocused: true}})}
                                   onBlur={() => this.setState({nameField: {...nameField, isFocused: false}})}
                            />
                            {
                                !nameField['isValid'] &&
                                <div className="user-info-error" style={{color: 'red'}}>
                                    Имя не валидно
                                </div>
                            }
                        </div>
                    </div>
                    <div className={`user-info-item ${!emailField['isValid'] ? 'error' : ''}`}>
                        <span className={`${!emailField['isValid'] ? 'err-text' : ''}`}>Почта:</span>
                        <div className={`user-field-wrapper`}>
                            <FontAwesomeIcon icon={faEnvelope}/>
                            <input className={`${!emailField['isFocused'] ? 'default' : ''}  ${!emailField['isValid'] ? 'err-field' : ''}`}
                                   type="text"
                                   placeholder='example@mail.ru'
                                   value={emailField['value']}
                                   onChange={e => this.changeHandler(e.target.value, 'emailField')}
                                   onFocus={() => this.setState({emailField: {...emailField, isFocused: true}})}
                                   onBlur={() => this.setState({emailField: {...emailField, isFocused: false}})}
                            />
                            {
                                !emailField['isValid'] &&
                                <div className="user-info-error" style={{color: 'red'}}>
                                    Почта на валидна
                                </div>
                            }
                        </div>
                    </div>
                    <div className={`user-info-item ${!phoneField['isValid'] ? 'error' : ''}`}>
                        <span className={`${!phoneField['isValid'] ? 'err-text' : ''}`}>Телефон:</span>
                        <div className={`user-field-wrapper`}>
                            <FontAwesomeIcon icon={faPhone}/>
                            <input className={`${!phoneField['isFocused'] ? 'default' : ''}  ${!phoneField['isValid'] ? 'err-field' : ''}`}
                                   type="number"
                                   placeholder='+77771112233'
                                   value={phoneField['value']}
                                   onChange={e => this.changeHandler(e.target.value, 'phoneField')}
                                   onFocus={() => this.setState({phoneField: {...phoneField, isFocused: true}})}
                                   onBlur={() => this.setState({phoneField: {...phoneField, isFocused: false}})}
                            />
                            {
                                !phoneField['isValid'] &&
                                <div className="user-info-error" style={{color: 'red'}}>
                                    Номер не валиден
                                </div>
                            }
                        </div>
                    </div>
                    <div className={`user-info-item ${!addressField['isValid'] ? 'error' : ''}`}>
                        <span className={`${!addressField['isValid'] ? 'err-text' : ''}`}>Адрес:</span>
                        <div className={`user-field-wrapper`}>
                            <FontAwesomeIcon icon={faMapMarkerAlt}/>
                            <input className={`${!addressField['isFocused'] ? 'default' : ''}  ${!addressField['isValid'] ? 'err-field' : ''}`}
                                   type="text"
                                   placeholder='Алматы, Каскелен'
                                   value={addressField['value']}
                                   onChange={e => this.changeHandler(e.target.value, 'addressField')}
                                   onFocus={() => this.setState({addressField: {...addressField, isFocused: true}})}
                                   onBlur={() => this.setState({addressField: {...addressField, isFocused: false}})}
                            />
                            {
                                !addressField['isValid'] &&
                                <div className="user-info-error" style={{color: 'red'}}>
                                    Минимум 6 символов
                                </div>
                            }
                        </div>
                    </div>
                </div>

                <button className="user-info-submit"
                        onClick={this.submit}
                >
                    <span>Сохранить</span>
                    <span>
                        <FontAwesomeIcon icon={faSave}/>
                    </span>
                </button>
            </div>
        );
    }
}

export default UserInfo;
