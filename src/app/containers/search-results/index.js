import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Redirect} from "react-router";

import SearchItem  from "../../components/search-results-components/result-item";
import Pagination from "../../common/pagination";

import {getHotelsAction, setSearchFields, toggleSignInUpModalAction} from "../../../store/actions";

class SearchResults extends React.Component {
    componentDidMount() {
        const {searchResults, searchFields, getHotelsAction} = this.props;
        if (!searchResults && localStorage.getItem('searchFields')) getHotelsAction(searchFields);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {searchFields: {prevPage}} = prevProps;
        const {searchFields: {page}, getHotelsAction, searchFields} = this.props;
        if (prevPage !== page) {
            getHotelsAction(searchFields);
        }
    }

    toggleFav = () => {
        const {isLoggedIn, toggleSignInUpModalAction} = this.props;
        if (!isLoggedIn) toggleSignInUpModalAction(true);
    };

    pagChangeHandler = (value) => {
        const {setSearchFields} = this.props;
        setSearchFields({value, field: "page"});
    };

    pagDirChangeHandler = (page, pageAmount, dir) => {
        const {setSearchFields} = this.props;
        if (page === 1 && dir === 'prev') return;
        if (page === pageAmount && dir === 'next') return;
        if (dir === 'prev') setSearchFields({value: page - 1, field: "page"});
        if (dir === 'next') setSearchFields({value: page + 1, field: "page"});
    };


    render() {
        const {
            toggleFav,
            pagChangeHandler,
            pagDirChangeHandler,
            props: {
                searchResults,
                searchFields,
                totalCount
            }
        } = this;

        if (!searchResults && !localStorage.getItem('searchFields')) return <Redirect to={'/'}/>;
        return (
            <div className='search-results-wrapper'>
                <div className="container">
                    {/*There are will be a row bar*/}

                    <div className="search-results-container">

                        <div className="search-results-filters">
                        {/*  There will be filters  */}
                        </div>

                        <div className="search-results-content">
                            <div className="search-listing-heading">
                                <span>Результаты по: </span>
                                <span>{searchFields['city']}</span> -> {searchResults ? searchResults.length : 0} вариантов
                            </div>
                            <div className="search-listing">
                                {
                                    searchResults && searchResults.map((item) => (
                                        <SearchItem key={item['hotel_id']}
                                                    hotel={item}
                                                    toggleFav={toggleFav}
                                        />
                                    ))
                                }
                            </div>
                            <Pagination page={searchFields['page']}
                                        pageSize={searchFields['count']}
                                        totalCount={totalCount}
                                        pageChangeHandler={pagChangeHandler}
                                        pageDirChangeHandler={pagDirChangeHandler}
                            />
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

SearchResults.propTypes = {
    getHotelsAction: PropTypes.func.isRequired,
    setSearchFields: PropTypes.func.isRequired,
    toggleSignInUpModalAction: PropTypes.func.isRequired,

    searchResults: PropTypes.array,

    searchFields: PropTypes.object.isRequired,

    totalCount: PropTypes.number.isRequired,

    isLoggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    isLoggedIn: state.AuthReducer.isLoggedIn,
    searchResults: state.HotelsReducer.searchResults,
    searchFields: state.HotelsReducer.searchFields,
    totalCount: state.HotelsReducer.totalCount

});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            setSearchFields,
            getHotelsAction,
            toggleSignInUpModalAction
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
