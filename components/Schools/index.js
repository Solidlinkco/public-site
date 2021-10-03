import React from 'react';
import { StyledWrapper } from './styled';

import CountryList from './CountryList';

const Schools = ({ title, schools }) => {
    return (
        <StyledWrapper>
            <div className="blog-page-banner">
                <div>
                    <div>
                        <h1>{title}</h1>
                        <p className="fz-14 ">SOLIDLINKCO | EDU CONSULTING</p>
                    </div>
                </div>
            </div>
            <CountryList schools={schools} title={title} />
        </StyledWrapper>
    );
};

export default Schools;
