import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Route, Switch, Redirect} from "react-router-dom";
import Header from "./containers/header";
import MainSearch from "./containers/main-search";
import SearchResults from "./containers/search-results";
import {
    initAppAction
} from "../store/actions";

class App extends React.Component {

    componentDidMount() {
    }

    render() {

        return (
            <div className='main-page'>
                <Header />
                <main>
                    <Switch>
                        <Route
                            path={'/'}
                            component={MainSearch}
                            exact
                        />
                        <Route
                            path={'/search-results'}
                            component={SearchResults}
                            exact
                        />
                        <Redirect to={'/not-found'} />
                    </Switch>
                </main>

            </div>
        );
    }
}





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
