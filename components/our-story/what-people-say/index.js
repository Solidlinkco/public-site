import React from 'react';
import { H2 } from '../../atoms/H2';
import { StyledWrapper } from './styled';

const VIDEOS_SRC = [
    '/assets/videos/reviews/01.mp4',
    '/assets/videos/reviews/02.mp4',
    '/assets/videos/reviews/03.mp4',
    '/assets/videos/reviews/04.mp4',
];

const WhatPeopleSay = () => {
    return (
        <div>
            <div className="col-12 py20 center">
                <H2 fontWeight="700" color="#400436" margin="0 0 24px 0">
                    What People Say About Us
                </H2>
            </div>
            <StyledWrapper>
                {VIDEOS_SRC.map((src) => (
                    <div key={src}>
                        <video width="310" height="550" controls controlsList="nodownload">
                            <source src={src} type="video/mp4" />
                            Your browser does not support HTML video.
                        </video>
                    </div>
                ))}
            </StyledWrapper>
        </div>
    );
};

export default WhatPeopleSay;
