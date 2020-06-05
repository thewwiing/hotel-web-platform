import React from 'react';
import PropTypes from 'prop-types';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSave, faCog} from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {bindActionCreators} from "redux";

import UserContentHeader from '../user-content-header';

import {checkForOldPasswordAction, clearSettingsAction} from "../../../../store/actions";
import {isAllValid} from "../../../../shared/helpers";



class UserSettings extends React.Component {
    state = {
        old_password:  {value: '', isValid: true, isFocused: false},
        new_password:  {value: '', isValid: true, isFocused: false},
        new_password2: {value: '', isValid: true, isFocused: false},
        textError: ''
    };

    changeHandler = (value, field) => {
        const state = this.state;

        state[field]['value'] = value;
        state[field]['isValid'] = true;
        state['textError'] = '';

        this.props.clearSettingsAction();
        this.setState(state);
    };

    submit = () => {
        const state = this.state;
        const {
            state: {old_password, new_password, new_password2},
            props: {checkForOldPasswordAction}
        } = this;

        const isPasswordsEqual = new_password['value'] === new_password2['value'];
        const isNewPassword = new_password['value'] !== old_password['value'];

        if (old_password['value'].length < 8)  state['old_password']['isValid'] = false;
        if (new_password['value'].length < 8)  state['new_password']['isValid'] = false;
        if (new_password2['value'].length < 8) state['new_password2']['isValid'] = false;

        if (isAllValid(state) && isPasswordsEqual && isNewPassword) {
            checkForOldPasswordAction({
                new_password: new_password['value'],
                old_password: old_password['value']
            })
        }

        if (!isPasswordsEqual) state['textError'] = 'Новые пароли должеы совпадать';
        if (!isNewPassword) state['textError'] = 'Старый и новый пароли должны отличаться';

        this.setState(state);

    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!prevProps.settingsSuccess && this.props.settingsSuccess) {
            this.setState({
                old_password:  {value: '', isValid: true, isFocused: false},
                new_password:  {value: '', isValid: true, isFocused: false},
                new_password2: {value: '', isValid: true, isFocused: false},
                textError: ''
            });
        }
    }

    componentWillUnmount() {
        this.props.clearSettingsAction();
    }

    render() {
        const {
            props: {passwordError, settingsSuccess},
            state: {old_password, new_password, new_password2, textError}
        } = this;

        const globalError = textError || passwordError;

        return (
            <div className='user-settings'>
                <UserContentHeader title='Сменить пароль'/>
                <div className="user-settings-fields" style={{marginTop: '30px'}}>
                    <div className="user-info-fields">

                        {
                            globalError &&
                            <div className='user-settings-global-error'>
                                {globalError}
                            </div>
                        }

                        {
                            settingsSuccess &&
                            <div className="user-settings-success">
                                Пароль успешно изменен!!!
                            </div>
                        }

                        <div className={`user-info-item ${!old_password['isValid'] ? 'error' : ''}`}>
                            <span className={`${!old_password['isValid'] ? 'err-text' : ''}`}>Старый пароль:</span>
                            <div className={`user-field-wrapper`}>
                                <FontAwesomeIcon icon={faCog}/>
                                <input className={`${!old_password['isFocused'] ? 'default' : ''}  ${!old_password['isValid'] ? 'err-field' : ''}`}
                                       type="password"
                                       placeholder='Старый пароль'
                                       value={old_password['value']}
                                       onChange={e => this.changeHandler(e.target.value, 'old_password')}
                                       onFocus={() => this.setState({old_password: {...old_password, isFocused: true}})}
                                       onBlur={() => this.setState({old_password: {...old_password, isFocused: false}})}
                                />
                                {
                                    !old_password['isValid'] &&
                                    <div className="user-info-error" style={{color: 'red'}}>
                                        Минимум 8 символов
                                    </div>
                                }
                            </div>
                        </div>

                        <div className={`user-info-item ${!new_password['isValid'] ? 'error' : ''}`}>
                            <span className={`${!new_password['isValid'] ? 'err-text' : ''}`}>Новый пароль:</span>
                            <div className={`user-field-wrapper`}>
                                <FontAwesomeIcon icon={faCog}/>
                                <input className={`${!new_password['isFocused'] ? 'default' : ''}  ${!new_password['isValid'] ? 'err-field' : ''}`}
                                       type="password"
                                       placeholder='Новый пароль'
                                       value={new_password['value']}
                                       onChange={e => this.changeHandler(e.target.value, 'new_password')}
                                       onFocus={() => this.setState({new_password: {...new_password, isFocused: true}})}
                                       onBlur={() => this.setState({new_password: {...new_password, isFocused: false}})}
                                />
                                {
                                    !new_password['isValid'] &&
                                    <div className="user-info-error" style={{color: 'red'}}>
                                        Минимум 8 символов
                                    </div>
                                }
                            </div>
                        </div>

                        <div className={`user-info-item ${!new_password2['isValid'] ? 'error' : ''}`}>
                            <span className={`${!new_password2['isValid'] ? 'err-text' : ''}`}>Новый пароль:</span>
                            <div className={`user-field-wrapper`}>
                                <FontAwesomeIcon icon={faCog}/>
                                <input className={`${!new_password2['isFocused'] ? 'default' : ''}  ${!new_password2['isValid'] ? 'err-field' : ''}`}
                                       type="password"
                                       placeholder='Новый пароль'
                                       value={new_password2['value']}
                                       onChange={e => this.changeHandler(e.target.value, 'new_password2')}
                                       onFocus={() => this.setState({new_password2: {...new_password2, isFocused: true}})}
                                       onBlur={() => this.setState({new_password2: {...new_password2, isFocused: false}})}
                                />
                                {
                                    !new_password2['isValid'] &&
                                    <div className="user-info-error" style={{color: 'red'}}>
                                        Минимум 8 символов
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
            </div>
        );
    }
}

UserSettings.propTypes = {
    clearSettingsAction: PropTypes.func.isRequired,
    checkForOldPasswordAction: PropTypes.func.isRequired,

    passwordError: PropTypes.string.isRequired,

    settingsSuccess: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    passwordError: state.UserReducer.passwordError,
    settingsSuccess: state.UserReducer.settingsSuccess
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            clearSettingsAction,
            checkForOldPasswordAction
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(
    withRouter(UserSettings)
);
