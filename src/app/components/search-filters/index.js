import React from 'react';
import PropTypes from 'prop-types';

import MainFilters from './main-filters';
import SeparateFilters from './separate-filters';

class Filters extends React.Component {

    render() {
        const {searchFields, setSearchFields} = this.props;

        return (
            <div className='search-filters'>
                <MainFilters setSearchFields={setSearchFields}
                             searchFields={searchFields}
                />
                <SeparateFilters setSearchFields={setSearchFields}
                                 searchFields={searchFields}
                />
            </div>
        );
    }
}

Filters.propTypes = {
    setSearchFields: PropTypes.func.isRequired,

    searchFields: PropTypes.object.isRequired
};

export default Filters;
