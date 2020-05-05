import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import ResultItem  from "../../components/search-results-components/result-item";

class SearchResults extends React.Component {
    static propTypes = {
        searchResults: PropTypes.array.isRequired
    };

    render() {
        const {
            props: {searchResults}
        } = this;

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
                                <span>Результаты по:</span>
                                <span>Алматы</span> -> {searchResults.length} вариантов
                            </div>
                            <div className="search-listing">
                                {
                                    searchResults.map(item => (
                                        <ResultItem hotel={item}/>
                                    ))
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    searchResults: state.SearchResultsReducer.searchResults
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {


        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
