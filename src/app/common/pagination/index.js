import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretRight, faCaretLeft} from "@fortawesome/free-solid-svg-icons";

class Pagination extends React.Component {

    render() {
        const {
            pageChangeHandler,
            pageDirChangeHandler,
            page,
            pageSize,
            totalCount
        } = this.props;

        const pageAmount = Math.ceil(totalCount / pageSize);

        let pages = [];

        for (let i = 1; i <= pageAmount; i++) pages.push(i);

        return(
            <div className='pagination'>
                <div className="page-box page-prev"
                     onClick={() => pageDirChangeHandler(page, pageAmount, 'prev')}
                >
                    <FontAwesomeIcon icon={faCaretLeft}/>
                </div>

                {
                    pages.map(item => (
                        <div key={item}
                             className={`page-box ${item === page ? 'active' : ''}`}
                             onClick={() => pageChangeHandler(item)}
                        >
                            <span>{item}</span>
                        </div>
                    ))
                }

                <div className="page-box page-next"
                     onClick={() => pageDirChangeHandler(page, pageAmount, 'next')}
                >
                    <FontAwesomeIcon icon={faCaretRight}/>
                </div>
            </div>
        );
    }
}

Pagination.propTypes = {
    pageChangeHandler: PropTypes.func.isRequired,
    pageDirChangeHandler: PropTypes.func.isRequired,

    page: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    totalCount: PropTypes.number.isRequired
};


export default Pagination;

