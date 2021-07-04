import React from "react";
import { StyledWrapper } from "./styled";

const ReviewCard = ({ reviewContent, authorPicture, author, role }) => {
    return (
        <StyledWrapper>
            <p className="content">{reviewContent}</p>
            <div>
                <img src={authorPicture?.url} alt={author} />
                <div className="facade-separator">&nbsp;</div>
                <div>
                    <p className="author-name">{author}</p>
                    {role && <p className="role">{role}</p>}
                </div>
            </div>
        </StyledWrapper>
    );
};

export default ReviewCard;
