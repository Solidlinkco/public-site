import React, { useCallback } from 'react';
import { useFilterSort } from '../../hooks';
import { StyledWrapper } from './styled';
import Search from './Search';

import PaginatedBlog from './PaginatedBlog';
const Blogs = ({ events }) => {
    const { filterListTotal, filterActive, filterSortList } = useFilterSort(events);

    return (
        <StyledWrapper>
            <div className="blog-page-banner">
                <div>
                    <div>
                        <h1>Events</h1>
                        <p className="fz-14 ">SOLIDLINKCO | EDU CONSULTING</p>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <div className="col-10 centered collapse-mobile">
                    <Search />
                </div>

                <div className="col-10 centered collapse-mobile">
                    <PaginatedBlog blogs={filterSortList} />
                </div>
            </div>
        </StyledWrapper>
    );
};

export default Blogs;
