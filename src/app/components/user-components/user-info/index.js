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
import {
    clearUserInfo,
    getUserFavouritesAction,
    getUserInfoAction,
    updateUserInfoAction
} from "../../../../store/actions";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {bindActionCreators} from "redux";
import {REGS} from "../../../../shared/regex";
import {isAllValid} from "../../../../shared/helpers";

import MediumPreloader from "../../../common/medium-preloader";

class UserInfo extends React.Component {

    state = {
        email: {value: '', isFocused: false, isValid: true},
        phone_number: {value: '', isFocused: false, isValid: true},
        first_name: {value: '', isFocused: false, isValid: true},
        second_name: {value: '', isFocused: false, isValid: true},
        address: {value: '', isFocused: false, isValid: true},
    };

    componentDidMount() {
        this.props.getUserInfoAction();
        this.props.getUserFavouritesAction();
    }

    componentWillUnmount() {
        this.props.clearUserInfo();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {
            fillFields,
            props: {userInfo},
        } = this;
        if ((JSON.stringify(userInfo) !== JSON.stringify(prevProps.userInfo)) //||
            // (JSON.stringify(userInfo) !== JSON.stringify(this.state))
        ) {
            fillFields(userInfo);
        }
    }

    changeHandler = (value, field) => {
        const state = this.state;

        if (field === 'phone_number' && value.length > 11) return;

        state[field]['value'] = value;
        state[field]['isValid'] = true;
        this.setState(state);
    };

    submit = () => {
        const state = this.state;
        const userInfo = this.props.userInfo;
        const body = {};

        for (let key in state) {
            if (state.hasOwnProperty(key)) {
                state[key]['isValid'] = REGS[key].test(state[key]['value']);
                body[key] = state[key]['value'];
            }
        }

        if (isAllValid(state)) {
            for (let key in body) {
                if (body.hasOwnProperty(key)) {
                    if (body[key] === userInfo[key]) delete body[key]
                }
            }
            this.props.updateUserInfoAction(body)
        }
        this.setState(state);
    };

    fillFields = (userInfo) => {
        this.setState({
            email:        {value: userInfo['email'] || '', isFocused: false, isValid: true},
            phone_number: {value: userInfo['phone_number'] || '', isFocused: false, isValid: true},
            first_name:   {value: userInfo['first_name'] || '', isFocused: false, isValid: true},
            second_name:  {value: userInfo['second_name'] || '', isFocused: false, isValid: true},
            address:      {value: userInfo['address'] || '', isFocused: false, isValid: true},
        });
    };

    render() {
        const {
            props: {isUserPending},
            state: {first_name, second_name, email, address, phone_number}
        } = this;

        return (
            <div className='user-info'>
                {
                    isUserPending &&
                    <MediumPreloader type={'Oval'} width={'25%'} height={'25%'} color={'#17458B'}/>
                }


                <div className="user-info-title h-cw-title-w">
                    <span>Ваш профиль</span>
                    <FontAwesomeIcon icon={faCaretDown}/>
                </div>

                <div className="user-info-fields">
                    <div className={`user-info-item ${!first_name['isValid'] ? 'error' : ''}`}>
                        <span className={`${!first_name['isValid'] ? 'err-text' : ''}`}>Имя:</span>
                        <div className={`user-field-wrapper`}>
                            <FontAwesomeIcon icon={faUser}/>
                            <input className={`${!first_name['isFocused'] ? 'default' : ''}  ${!first_name['isValid'] ? 'err-field' : ''}`}
                                   type="text"
                                   placeholder='Имя'
                                   value={first_name['value']}
                                   onChange={e => this.changeHandler(e.target.value, 'first_name')}
                                   onFocus={() => this.setState({first_name: {...first_name, isFocused: true}})}
                                   onBlur={() => this.setState({first_name: {...first_name, isFocused: false}})}
                            />
                            {
                                !first_name['isValid'] &&
                                <div className="user-info-error" style={{color: 'red'}}>
                                    Имя не валидно
                                </div>
                            }
                        </div>
                    </div>
                    <div className={`user-info-item ${!second_name['isValid'] ? 'error' : ''}`}>
                        <span className={`${!second_name['isValid'] ? 'err-text' : ''}`}>Фамилия:</span>
                        <div className={`user-field-wrapper`}>
                            <FontAwesomeIcon icon={faUser}/>
                            <input className={`${!second_name['isFocused'] ? 'default' : ''}  ${!second_name['isValid'] ? 'err-field' : ''}`}
                                   type="text"
                                   placeholder='Фамилия'
                                   value={second_name['value']}
                                   onChange={e => this.changeHandler(e.target.value, 'second_name')}
                                   onFocus={() => this.setState({second_name: {...second_name, isFocused: true}})}
                                   onBlur={() => this.setState({second_name: {...second_name, isFocused: false}})}
                            />
                            {
                                !second_name['isValid'] &&
                                <div className="user-info-error" style={{color: 'red'}}>
                                    Фамилия не валидна
                                </div>
                            }
                        </div>
                    </div>
                    <div className={`user-info-item ${!email['isValid'] ? 'error' : ''}`}>
                        <span className={`${!email['isValid'] ? 'err-text' : ''}`}>Почта:</span>
                        <div className={`user-field-wrapper`}>
                            <FontAwesomeIcon icon={faEnvelope}/>
                            <input className={`${!email['isFocused'] ? 'default' : ''}  ${!email['isValid'] ? 'err-field' : ''}`}
                                   type="text"
                                   placeholder='example@mail.ru'
                                   value={email['value']}
                                   onChange={e => this.changeHandler(e.target.value, 'email')}
                                   onFocus={() => this.setState({email: {...email, isFocused: true}})}
                                   onBlur={() => this.setState({email: {...email, isFocused: false}})}
                            />
                            {
                                !email['isValid'] &&
                                <div className="user-info-error" style={{color: 'red'}}>
                                    Почта на валидна
                                </div>
                            }
                        </div>
                    </div>
                    <div className={`user-info-item ${!phone_number['isValid'] ? 'error' : ''}`}>
                        <span className={`${!phone_number['isValid'] ? 'err-text' : ''}`}>Телефон:</span>
                        <div className={`user-field-wrapper`}>
                            <FontAwesomeIcon icon={faPhone}/>
                            <input className={`${!phone_number['isFocused'] ? 'default' : ''}  ${!phone_number['isValid'] ? 'err-field' : ''}`}
                                   type="number"
                                   placeholder='+77771112233'
                                   value={phone_number['value']}
                                   onChange={e => this.changeHandler(e.target.value, 'phone_number')}
                                   onFocus={() => this.setState({phone_number: {...phone_number, isFocused: true}})}
                                   onBlur={() => this.setState({phone_number: {...phone_number, isFocused: false}})}
                            />
                            {
                                !phone_number['isValid'] &&
                                <div className="user-info-error" style={{color: 'red'}}>
                                    Номер не валиден
                                </div>
                            }
                        </div>
                    </div>
                    <div className={`user-info-item ${!address['isValid'] ? 'error' : ''}`}>
                        <span className={`${!address['isValid'] ? 'err-text' : ''}`}>Адрес:</span>
                        <div className={`user-field-wrapper`}>
                            <FontAwesomeIcon icon={faMapMarkerAlt}/>
                            <input className={`${!address['isFocused'] ? 'default' : ''}  ${!address['isValid'] ? 'err-field' : ''}`}
                                   type="text"
                                   placeholder='Алматы, Каскелен'
                                   value={address['value']}
                                   onChange={e => this.changeHandler(e.target.value, 'address')}
                                   onFocus={() => this.setState({address: {...address, isFocused: true}})}
                                   onBlur={() => this.setState({address: {...address, isFocused: false}})}
                            />
                            {
                                !address['isValid'] &&
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

UserInfo.propTypes = {
    getUserInfoAction: PropTypes.func.isRequired,
    updateUserInfoAction: PropTypes.func.isRequired,

    userInfo: PropTypes.object.isRequired,

    isUserPending: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
    userInfo: state.UserReducer.userInfo,
    isUserPending: state.UserReducer.isUserPending,
});
const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            clearUserInfo,
            getUserFavouritesAction,
            getUserInfoAction,
            updateUserInfoAction
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(
    withRouter(UserInfo)
);
