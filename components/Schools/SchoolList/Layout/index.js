import React from 'react';
import { StyledWrapper } from './styled';
import { getIconUrl } from '../../../../constants/CountryIso';

const SchoolLayout = ({ title, children, pageAlpha3 }) => {
    return (
        <StyledWrapper url={getIconUrl(pageAlpha3) ?? ''}>
            <div className="blog-page-banner">
                <div>
                    <div>
                        <h1>{title}</h1>
                        <p className="fz-14 ">SOLIDLINKCO | EDU CONSULTING</p>
                    </div>
                </div>
            </div>
            {children}
        </StyledWrapper>
    );
};

export default SchoolLayout;
