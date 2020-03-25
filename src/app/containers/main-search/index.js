import React from 'react';
import {compose} from "redux";
import {withParallax} from "../../common/parallax-component";

class MainSearch extends React.Component {
    render() {
        return(
            <div className='search-wrapper'>
                <div className="search-content">
                    <div className="search-title"></div>
                    <div className="search-fields"></div>
                </div>
            </div>
        );
    }
}

export default compose(
    withParallax
)(MainSearch);
