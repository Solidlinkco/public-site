import React from 'react';
import { StyledWrapper, StyledStoryContent } from './styled';
import { H2 } from '../../atoms/H2';

const DidYouKnow = ({ didYouKnow }) => {
    return (
        <div
            style={{
                width: '100%',
                backgroundColor: '#400436',
                marginTop: '28px',
            }}
        >
            <div className="col-12 py20 center">
                <StyledWrapper>
                    <H2 fontWeight="600" color="#f49d2a" className="center">
                        Did You Know?
                    </H2>
                    <StyledStoryContent>
                        <p>
                            Solid-Link has a 100% success rate when clients follow our processes and instructions. This
                            means that everyone you refer is guaranteed results
                        </p>
                    </StyledStoryContent>
                </StyledWrapper>
            </div>
        </div>
    );
};

export default DidYouKnow;
