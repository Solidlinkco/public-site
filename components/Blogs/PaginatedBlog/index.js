import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { StyledBlogsWrapper } from '../styled';
import PageButtons from './PageButtons';
import Link from 'next/link';
import BlogCard from '../../ui/BlogCard';
import classes from './styled.module.scss';
import EventCard from '../../ui/EventCard';
import format from 'date-fns/format';
import { enGB } from 'date-fns/locale';

const BLOG_PER_PAGE = 20;

const getDescription = (description) =>
    description
        ?.replace(/\\n/gi, ' ')
        ?.replace(/<p class="has-text-align-left">/g, ' ')
        ?.replace(/<p>/g, ' ')
        ?.replace(/<a>/g, ' ')
        ?.replace('</a>', ' ')
        ?.replace('</strong>', ' ')
        ?.replace(/<strong>/g, ' ')
        ?.replace('<a href="https://www.goabroad.com/study-abroad">"', ' ')

        ?.substring(0, 400)
        ?.trim() + '...';

const PaginatedBlog = ({ blogs, isBlog }) => {
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
                {blogList.map((data) => {
                    const date = format(new Date(data.customDate || data.publishedAt), 'dd/MM/yyyy', {
                        locale: enGB,
                    });

                    if (isBlog) {
                        return (
                            <Link key={data.title} href={`/articles/${data.blogSlug}`}>
                                <EventCard
                                    showDate={false}
                                    customDate={date}
                                    className="blg-page-card"
                                    title={data.title}
                                    image={data?.image}
                                    isBlog={isBlog}
                                    description={getDescription(data.content?.text)}
                                    imageAltAttribute={data.imageAltAttribute}
                                />
                            </Link>
                        );
                    }

                    return (
                        <EventCard
                            customDate={date}
                            className="blg-page-card"
                            title={data.title}
                            image={data?.image}
                            key={data.title}
                            isBlog={isBlog}
                            description={getDescription(data.content?.text)}
                            imageAltAttribute={data.imageAltAttribute}
                        />
                    );
                })}
            </StyledBlogsWrapper>
            {totalPages > 1 && (
                <PageButtons totalPages={totalPages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
            )}
        </div>
    );
};

export default PaginatedBlog;
