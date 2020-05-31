import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretRight, faCaretLeft} from "@fortawesome/free-solid-svg-icons";

class Pagination extends React.Component {

    pagDirChangeHandler = (page, pageAmount, dir) => {
        const {pageChangeHandler} = this.props;
        if (page === 1 && dir === 'prev') return;
        if (page === pageAmount && dir === 'next') return;
        if (dir === 'prev') pageChangeHandler(page - 1);
        if (dir === 'next') pageChangeHandler(page + 1);
    };

    render() {
        const {
            pageChangeHandler,
            page,
            pageSize,
            totalCount
        } = this.props;

        const pageAmount = Math.ceil(totalCount / pageSize);

        let pages = [];
        for (let i = 1; i <= pageAmount; i++) pages.push(i);

        return(
            <div className='pagination'>
                {
                    totalCount > 0 &&
                    <Fragment>
                        <div className="page-box page-prev"
                             onClick={() => this.pagDirChangeHandler(page, pageAmount, 'prev')}
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
                             onClick={() => this.pagDirChangeHandler(page, pageAmount, 'next')}
                        >
                            <FontAwesomeIcon icon={faCaretRight}/>
                        </div>
                    </Fragment>
                }
            </div>
        );
    }
}

Pagination.propTypes = {
    pageChangeHandler: PropTypes.func.isRequired,

    page: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    totalCount: PropTypes.number.isRequired
};


export default Pagination;

