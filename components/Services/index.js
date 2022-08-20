import React from 'react';
import { StyledWrapper } from './styled';
import ServiceSection from './ServiceSection';
import Packages from './Packages';
const Services = ({ servicesCards }) => {
    return (
        <StyledWrapper>
            <div className="blog-page-banner">
                <div>
                    <div>
                        <h1>Services</h1>
                        <p className="fz-14 ">SOLIDLINKCO | EDU CONSULTING</p>
                    </div>
                </div>
            </div>
            <ServiceSection servicesCards={servicesCards} />
            <Packages />
        </StyledWrapper>
    );
};

export default Services;
