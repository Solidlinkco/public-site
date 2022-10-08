import React from 'react';
import { StyledWrapper, StyledBlob } from './styled';

const TextSection = ({ reverse, data, children }) => {
    return (
        <div className="col-12 collapse-mobile" {...(reverse && { style: { marginBottom: '48px' } })}>
            <StyledWrapper $reverse={reverse}>
                <div>
                    {children ? (
                        children
                    ) : (
                        <img
                            src="./assets/img/neonbrand-1-aA2Fadydc-unsplash.jpg"
                            alt="become solid-link edu consulting agent"
                        />
                    )}
                </div>
                <div style={{ backgroundColor: '#f49d2a', borderRadius: '10px' }}>
                    <StyledBlob>
                        <h2>{data.title}</h2>
                        {Array.isArray(data.contentText) ? (
                            <ul>
                                {data.contentText.map((text, index) => (
                                    <li key={index}>{text}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>{data.contentText}</p>
                        )}
                    </StyledBlob>
                </div>
            </StyledWrapper>
        </div>
    );
};

export default TextSection;
