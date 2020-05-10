import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {withRouter} from "react-router";

import UserHeader from "../../components/user-components/user-header";
import UserContent from "../../components/user-components/user-content";

class UserAccount extends React.Component {
    state = {
        activeNav: 'profile'
    };

    render() {
        const {
            state: {activeNav},
            props: {history}
        } = this;

        return (
            <section className="user-account">
                <UserHeader activeNav={activeNav}
                            changeNav={(activeNav) => this.setState({activeNav})}
                />
                <UserContent activeNav={activeNav}/>
            </section>
        );
    }
}

UserAccount.propTypes = {
    history: PropTypes.object.isRequired
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

export default connect(mapStateToProps, mapDispatchToProps)(
    withRouter(UserAccount)
);
