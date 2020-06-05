import React from 'react';
import PropTypes from 'prop-types';

import FilterItem from './filter-item';

class SeparateFilters extends React.Component {
    state = {
        services: [
            {id: 0, field: 'wifi', alias: 'Wi-Fi', value: false},
            {id: 1, field: 'breakfast', alias: 'Питание', value: false},
            {id: 2, field: 'parking', alias: 'Паркинг', value: false}
        ],
        stars : [
            {field: ''}
        ],
    };

    changeHandler = (index) => {
        console.log(index);
        const state = this.state;
        state['services'][index]['value'] = !state['services'][index]['value'];
        this.setState(state);
    };

    render() {
        const {
            changeHandler,
            state: {services}
        } = this;

        return (
            <div className='separate-search-filters'>
                <div className="sep-filter-title">Категории</div>


                <FilterItem title='Удобства'
                            items={services}
                            changeHandler={changeHandler}
                />

            </div>
        );
    }
}

SeparateFilters.propTypes = {
    setSearchFields: PropTypes.func.isRequired,

    searchFields: PropTypes.object.isRequired
};

export default SeparateFilters;
