import React from 'react';
import { v4 as uniqueId } from 'uuid';

import classes from './styled.module.scss';
import { Arrow } from '../../../assets/icons';

const PageButtons = ({ totalPages, setCurrentPage, currentPage }) => {
    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="col-12">
            <div className={classes.PagedButtons}>
                <button onClick={prevPage} className={classes.PagedButtons__Prev} disabled={currentPage === 1}>
                    <Arrow />
                </button>
                <div className={classes.PagedButtons__Numbered}>
                    {[...Array(totalPages).keys()].map((el) => (
                        <button
                            key={uniqueId()}
                            onClick={() => setCurrentPage(el + 1)}
                            className={[
                                classes.PagedButtons__Item,
                                `${currentPage === el + 1 ? classes.PagedButtons__Item___Active : ''}`,
                            ].join(' ')}
                        >
                            <span data-letters={el + 1} />
                        </button>
                    ))}
                </div>
                <button onClick={nextPage} className={classes.PagedButtons__Next} disabled={currentPage === totalPages}>
                    <Arrow />
                </button>
            </div>
        </div>
    );
};

export default PageButtons;
