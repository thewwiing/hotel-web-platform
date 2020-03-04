import React, {Fragment} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {
    initAppAction
} from "../store/actions";

class App extends React.Component {

    componentDidMount() {
        this.props.initAppAction([1,2,3,4,5]);
    }

    render() {
        console.log(this.props.hotHotels);

        return (
          <Fragment>
              <section className="header"></section>

              <section className="main">
                  Let's start
              </section>

              <section className="footer"></section>
          </Fragment>
        );
    }
};

const mapStateToProps = state => ({
    hotHotels: state.HomeReducer.hotHotels
});
const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            initAppAction

        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
