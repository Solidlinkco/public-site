import React from 'react';
import StarIcon from '@material-ui/icons/StarRounded';
import { StyledWrapper, StyledReviews } from './styled';
import ReviewCard from './ReviewCard';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIosRounded';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIosRounded';

const Reviews = ({ reviews }) => {
    return (
        <StyledWrapper>
            <div className="col-12">
                <div className="reviews-header">
                    <StarIcon />
                </div>
                <h3>Read From Satisfied Customer</h3>
            </div>
            <div className="col-12">
                <StyledReviews>
                    {reviews?.slice(0, 3)?.map(({ reviewContent, authorPicture, author, role }) => (
                        <ReviewCard
                            key={author}
                            author={author}
                            role={role}
                            authorPicture={authorPicture}
                            reviewContent={reviewContent}
                        />
                    ))}
                </StyledReviews>
            </div>
        </StyledWrapper>
    );
};

function NextArrow({ onClick }) {
    return (
        <div
            style={{
                right: '-5px',
                position: 'absolute',
                top: '50%',
                display: 'block',
                width: '12px',
                height: '12px',
                padding: '0',
                transform: 'translate(0, -50%)',
                cursor: 'pointer',
            }}
            onClick={onClick}
        >
            <ArrowForwardIosIcon />
        </div>
    );
}

function PrevArrow({ onClick }) {
    return (
        <div
            style={{
                left: '-15px',
                position: 'absolute',
                top: '50%',
                display: 'block',
                width: '12px',
                height: '12px',
                padding: '0',
                transform: 'translate(-50%, -50%)',
                cursor: 'pointer',
            }}
            onClick={onClick}
        >
            <ArrowBackIosIcon />
        </div>
    );
}

export default Reviews;
