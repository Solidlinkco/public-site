import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { StyledBlogsWrapper } from '../styled';
import PageButtons from './PageButtons';
import BlogCard from '../../ui/BlogCard';
import classes from './styled.module.scss';
import { v4 } from 'uuid';

const BLOG_PER_PAGE = 20;

const PaginatedBlog = ({ blogs }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const { pathname } = useRouter();

    /* Logic for DISPLAYING Paginated Blog */
    const indexOfLastBlogList = currentPage * BLOG_PER_PAGE;
    const indexOfFirstBlogList = indexOfLastBlogList - BLOG_PER_PAGE;
    const totalPages = Math.ceil(blogs.length / BLOG_PER_PAGE);
    const blogList = blogs.slice(indexOfFirstBlogList, indexOfLastBlogList);
    /* Logic for DISPLAYING Blog */

    return (
        <div className={classes.StyledWrapper}>
            <StyledBlogsWrapper>
                {blogList.map((data) => (
                    <BlogCard className="blg-page-card" data={data} key={v4()} replaceN />
                ))}
            </StyledBlogsWrapper>
            {totalPages > 1 && (
                <PageButtons totalPages={totalPages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
            )}
        </div>
    );
};

export default PaginatedBlog;
