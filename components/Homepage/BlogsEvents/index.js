import React from 'react';
import { StyledWrapper, StyledEventWrapper } from './styled';
import BlogCard from '../../ui/BlogCard';
import EventCard from '../../ui/EventCard';
import { v4 } from 'uuid';

import { H2 } from '../../atoms/H2';
import StyledButton from '../../atoms/StyledButton';
import Link from 'next/link';
import format from 'date-fns/format';
import { enGB } from 'date-fns/locale';

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
        ?.substring(0, 110)
        ?.trim() + '...';

const BlogsEvent = ({ blog, events }) => {
    return (
        <div style={{ backgroundColor: 'rgba(244, 157, 42, 0.4)' }}>
            <div className="col-12">
                <StyledWrapper>
                    <div>
                        <div>
                            <H2 fontWeight="600" margin="0 0 24px 0" color="#400436">
                                Events
                            </H2>
                            <StyledEventWrapper>
                                {events?.map(({ title, eventSlug, dateAndTime, description, image }) => (
                                    <EventCard
                                        key={title}
                                        title={title}
                                        image={image}
                                        description={description}
                                        dateAndTime={dateAndTime}
                                        eventSlug={eventSlug}
                                    />
                                ))}
                            </StyledEventWrapper>
                        </div>

                        <div className="major-link">
                            <Link href="/blogs">
                                <a>
                                    <StyledButton>View all</StyledButton>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <H2 fontWeight="600" margin="0 0 24px 0" color="#400436">
                            Articles
                        </H2>
                        <StyledEventWrapper>
                            {blog?.map((data) => {
                                const date = format(new Date(data.customDate || data.publishedAt), 'dd/MM/yyyy', {
                                    locale: enGB,
                                });

                                return (
                                    <EventCard
                                        customDate={date}
                                        className="blg-page-card"
                                        title={data.title}
                                        image={data?.image}
                                        key={v4()}
                                        description={getDescription(data?.content?.text || data?.customContent)}
                                    />
                                );
                            })}
                        </StyledEventWrapper>

                        <div className="major-link">
                            <Link href="/articles">
                                <a>
                                    <StyledButton>View all</StyledButton>
                                </a>
                            </Link>
                        </div>
                    </div>
                </StyledWrapper>
            </div>
        </div>
    );
};

export default BlogsEvent;
