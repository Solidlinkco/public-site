import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { StyledBlogsWrapper } from '../styled';
import PageButtons from './PageButtons';
import EventCard from '../../ui/EventCard';
import classes from './styled.module.scss';
import { v4 } from 'uuid';
import isEmpty from 'lodash/isEmpty';
import { H2 } from '../../atoms/H2';

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
            {isEmpty(blogList) && (
                <>
                    <H2 margin="40px 0 0 0" fontWeight="700" color="#400436" textAlign="center">
                        We have no events coming up soon.
                    </H2>
                    <H2
                        margin="20px 0 60px 0"
                        fontSize="20px"
                        fontWeight="700"
                        color="#400436"
                        textAlign="center"
                        lineHeight="1.4"
                    >
                        Watch this space for future events.
                    </H2>
                </>
            )}
            {!isEmpty(blogList) && (
                <StyledBlogsWrapper>
                    {blogList.map(({ title, eventSlug, dateAndTime, description, image, imageAltAttribute }) => (
                        <EventCard
                            key={v4()}
                            title={title}
                            eventSlug={eventSlug}
                            dateAndTime={dateAndTime}
                            description={description}
                            image={image}
                            imageAltAttribute={imageAltAttribute}
                        />
                    ))}
                </StyledBlogsWrapper>
            )}
            {!isEmpty(blogList) && totalPages > 1 && (
                <PageButtons totalPages={totalPages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
            )}
        </div>
    );
};

export default PaginatedBlog;
