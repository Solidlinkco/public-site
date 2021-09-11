import React, { useState, useEffect, useMemo } from 'react';
import { StyledWrapper, StyledCardWrapper } from './styled';
import { H2 } from '../../atoms/H2';

import ServiceCard from '../../ui/ServiceCard';
import StyledButton from '../../atoms/StyledButton';

const CARDS_CLASS = 'service-card';

const ServicesSection = ({ servicesCards }) => {
    console.log('🚀 ~ file: index.js ~ line 12 ~ ServicesSection ~ servicesCards', servicesCards);
    return (
        <div style={{ backgroundColor: 'rgb(244, 157, 42, .4)' }}>
            <div className="col-12">
                <StyledWrapper>
                    <H2 fontWeight="600" color="#400436">
                        Our Services
                    </H2>

                    <StyledCardWrapper className="service-cards-wrap ">
                        {servicesCards?.map(({ id, title, description }) => (
                            <ServiceCard
                                className={CARDS_CLASS}
                                key={id}
                                title={title?.toLowerCase()}
                                description={description}
                            />
                        ))}
                    </StyledCardWrapper>
                </StyledWrapper>
            </div>
        </div>
    );
};

export default ServicesSection;
