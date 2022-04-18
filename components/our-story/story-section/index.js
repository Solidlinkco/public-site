import React from 'react';
import { StyledStoryContent, StyledWrapper } from './styled';
import { H2 } from '../../atoms/H2';

const StoryContent = ({ ourStory }) => {
    return (
        <div
            style={{
                width: '100%',
                backgroundColor: '#f49d2a',
                marginBottom: '80px',
            }}
        >
            <div className="col-12 collapse-mobile">
                <StyledWrapper>
                    <H2 fontWeight="600" color="#400436" className="center">
                        Our Story
                    </H2>
                    <StyledStoryContent dangerouslySetInnerHTML={{ __html: ourStory.ourStory.html }} />
                </StyledWrapper>
            </div>
        </div>
    );
};

export default StoryContent;
