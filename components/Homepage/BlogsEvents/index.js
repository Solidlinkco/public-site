import React from 'react';
import { StyledWrapper, StyledEventWrapper } from './styled';
import BlogCard from '../../ui/BlogCard';
import EventCard from '../../ui/EventCard';

import { H2 } from '../../atoms/H2';
import StyledButton from '../../atoms/StyledButton';
import Link from 'next/link';

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
                        <BlogCard data={blog} className="blog-card" replaceN />
                        <div className="major-link">
                            <Link href="/blogs">
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
