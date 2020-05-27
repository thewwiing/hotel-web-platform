import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {bindActionCreators} from "redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignInAlt, faUserPlus, faTimes} from "@fortawesome/free-solid-svg-icons";
import {
    signInAction,
    signUpAction,
    toggleSignInUpModalAction
} from "../../../store/actions";

class SignInUp extends React.Component {
    state = {
        emailField: {value: '', isFocused: false, isValid: true},
        passField: {value: '', isFocused: false, isValid: true},
        nameField: {value: '', isFocused: false, isValid: true},
        isLoginActive: true
    };

    componentDidMount() {
        const body = document.getElementsByTagName('body')[0];
        body.style.overflow = 'hidden';
    }

    componentWillUnmount() {
        const body = document.getElementsByTagName('body')[0];
        body.style.overflow = '';
    }

    changeHandler = (value, field) => {
        const state = this.state;
        state[field]['value'] = value;
        state[field]['isValid'] = true;
        this.setState(state);
    };

    submit = () => {
        const {
            props: {signInAction, signUpAction, history},
            state: {isLoginActive}
        } = this;
        const state = this.state;

        if(state['emailField']['value'].length < 4) state['emailField']['isValid'] = false;
        if(state['passField']['value'].length < 8) state['passField']['isValid'] = false;
        if(state['nameField']['value'].length < 4 && !isLoginActive) state['nameField']['isValid'] = false;

        if (isLoginActive && state['emailField']['isValid'] && state['passField']['isValid']) {
            signInAction({
                email: state['emailField']['value'],
                password: state['passField']['value'],
                history
            });
        }
        if (!isLoginActive && state['emailField']['isValid'] && state['nameField']['isValid'] && state['passField']['isValid']) {
            signUpAction({
                email: state['emailField']['value'],
                first_name: state['nameField']['value'].split(' ')[0],
                second_name: state['nameField']['value'].split(' ')[1],
                password: state['passField']['value']
            });
        }

        this.setState(state);
    };

    togglePage = (flag) => {
        this.setState({
            emailField: {value: '', isFocused: false, isValid: true},
            passField: {value: '', isFocused: false, isValid: true},
            nameField: {value: '', isFocused: false, isValid: true},
            isLoginActive: flag
        })
    };

    render() {
        const {
            props: {toggleSignInUpModalAction},
            state: {isLoginActive, emailField, nameField, passField}
        } = this;

        return (
            <div className='auth-wrapper'>
                <div className="auth-container">

                    <div className="auth-btn-control">
                        <button className={`auth-btn ${isLoginActive ? 'active' : ''}`}
                                onClick={() => this.togglePage(true)}
                        >
                            <span>
                                <FontAwesomeIcon icon={faSignInAlt}/>
                                ВОЙТИ
                            </span>
                        </button>
                        <button className={`auth-btn ${!isLoginActive ? 'active' : ''}`}
                                onClick={() => this.togglePage(false)}
                        >
                            <span>
                                <FontAwesomeIcon icon={faUserPlus}/>
                                РЕГИСТРАЦИЯ
                            </span>
                        </button>
                    </div>

                    <div className="auth-content">

                        <div className="auth-heading">
                            <div className="auth-heading-title">
                                <span>
                                    {isLoginActive ? 'Войти в' : 'Регистрация в'}
                                </span>
                                <span>EASY</span>
                                <span>HOTEL</span>
                            </div>
                            <div className="auth-close"
                                 onClick={() => toggleSignInUpModalAction(false)}
                            ><FontAwesomeIcon icon={faTimes}/>
                            </div>
                        </div>

                        <div className="auth-fields">
                            {
                                !isLoginActive &&
                                <div className="auth-field-wrapper">
                                    <div className={`auth-field-title ${!nameField['isValid'] ? 'err-text' : ''}`}>Полное имя:</div>
                                    <input className={`auth-field ${!nameField['isFocused'] ? 'default' : ''}  ${!nameField['isValid'] ? 'err-field' : ''}`}
                                           type='text'
                                           value={nameField['value']}
                                           onChange={e => this.changeHandler(e.target.value, 'nameField')}
                                           onFocus={() => this.setState({nameField: {...nameField, isFocused: true}})}
                                           onBlur={() => this.setState({nameField: {...nameField, isFocused: false}})}
                                           placeholder={'Петр Иванов'}
                                    />
                                    {
                                        !nameField['isValid'] &&
                                        <div className="auth-field-error" style={{color: 'red'}}>
                                            Имя на валидно
                                        </div>
                                    }
                                </div>
                            }
                            <div className="auth-field-wrapper">
                                <div className={`auth-field-title ${!emailField['isValid'] ? 'err-text' : ''}`}>Email</div>
                                <input className={`auth-field ${!emailField['isFocused'] ? 'default' : ''} ${!emailField['isValid'] ? 'err-field' : ''}`}
                                       type='text'
                                       value={emailField['value']}
                                       onChange={e => this.changeHandler(e.target.value, 'emailField')}
                                       onFocus={() => this.setState({emailField: {...emailField, isFocused: true}})}
                                       onBlur={() => this.setState({emailField: {...emailField, isFocused: false}})}
                                       placeholder='some@example.com'
                                />
                                {
                                    !emailField['isValid'] &&
                                    <div className="auth-field-error" style={{color: 'red'}}>
                                        Не валидный email
                                    </div>
                                }
                            </div>
                            <div className="auth-field-wrapper field-wrapper">
                                <div className={`auth-field-title  ${!passField['isValid'] ? 'err-text' : ''}`}>Пароль</div>
                                <input className={`auth-field ${!passField['isFocused'] ? 'default' : ''} ${!passField['isValid'] ? 'err-field' : ''}`}
                                       type='password'
                                       value={passField['value']}
                                       onChange={e => this.changeHandler(e.target.value, 'passField')}
                                       onFocus={() => this.setState({passField: {...passField, isFocused: true}})}
                                       onBlur={() => this.setState({passField: {...passField, isFocused: false}})}
                                />
                                {
                                    !passField['isValid'] &&
                                    <div className="auth-field-error" style={{color: 'red'}}>
                                        Минимум 8 символов
                                    </div>
                                }
                            </div>
                        </div>

                        <div className="auth-submit-control">
                            <button className='auth-submit-btn'
                                    onClick={this.submit}
                            >
                                <span>{isLoginActive ? 'Войти' : 'Зарегистрироваться'}</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

SignInUp.propTypes = {
    history: PropTypes.object.isRequired,
    toggleSignInUpModalAction: PropTypes.func.isRequired,
    signInAction: PropTypes.func.isRequired,
    signUpAction: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
});
const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            toggleSignInUpModalAction,
            signInAction,
            signUpAction
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(
    withRouter(SignInUp)
);
