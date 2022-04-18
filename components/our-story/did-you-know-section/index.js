import React from 'react';
import { StyledWrapper, StyledStoryContent } from './styled';
import { H2 } from '../../atoms/H2';

const DidYouKnow = ({ didYouKnow }) => {
    return (
        <div
            style={{
                width: '100%',
                backgroundColor: '#f49d2a',
                marginBottom: '40px',
            }}
        >
            <div className="col-12 py20 center">
                <StyledWrapper>
                    <H2 fontWeight="600" color="#400436" className="center">
                        Did You Know?
                    </H2>
                    <StyledStoryContent dangerouslySetInnerHTML={{ __html: didYouKnow.html }} />
                </StyledWrapper>
            </div>
        </div>
    );
};

export default DidYouKnow;
