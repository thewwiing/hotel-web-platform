import React from 'react';
import PropTypes from 'prop-types';

class FilterItem extends React.Component {
    render() {
        const {
            props: {title, items, changeHandler}
        } = this;

        return(
            <div className='sep-filter-item'>
                <div className="sep-f-item-title">{title}</div>

                {
                    items.map((item, index) => {
                        return(
                        <div className='sep-f-item-content' key={index}>
                            <input type="checkbox"
                                   id='sep-f-id'
                                   checked={item['value']}
                                   onChange={() => changeHandler(item['id'])}
                            />
                            <label htmlFor={'sep-f-id'}>{item['alias']}</label>
                        </div>
                    )})
                }

            </div>
        );
    }
}

FilterItem.propTypes = {
    changeHandler: PropTypes.func.isRequired,

    title: PropTypes.string.isRequired,

    items: PropTypes.array.isRequired
};

export default FilterItem;
