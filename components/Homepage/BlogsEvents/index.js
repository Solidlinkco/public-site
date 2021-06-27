import React from "react";
import { StyledWrapper } from "./styled";
import BlogCard from "../../ui/BlogCard";
import { H2 } from "../../atoms/H2";
import StyledButton from "../../atoms/StyledButton";
import Link from "next/link";

const BlogsEvent = ({ blog }) => {
    return (
        <div className="col-12">
            <StyledWrapper>
                <div>
                    <H2 fontWeight="600" margin="0 0 24px 0">
                        Events
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
                <div>
                    <H2 fontWeight="600" margin="0 0 24px 0">
                        Blogs
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
    );
};

export default BlogsEvent;
