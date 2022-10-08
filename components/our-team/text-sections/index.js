import React from 'react';
import { StyledWrapper, StyledBlob } from './styled';

const TextSection = ({ reverse, data }) => {
    return (
        <div className="col-12 collapse-mobile">
            <StyledWrapper $reverse={reverse}>
                <div>
                    <img src={data.image.url} alt={data.imageAltAttribute} />
                </div>
                <div style={{ backgroundColor: '#f49d2a', borderRadius: '10px' }}>
                    <StyledBlob dangerouslySetInnerHTML={{ __html: data.content.html }} />
                </div>
            </StyledWrapper>
        </div>
    );
};

export default TextSection;
