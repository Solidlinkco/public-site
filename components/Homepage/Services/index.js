import React, { useState, useEffect, useMemo } from 'react';
import { StyledWrapper, StyledCardWrapper } from './styled';
import { H2 } from '../../atoms/H2';

import ServiceCard from '../../ui/ServiceCard';
import StyledButton from '../../atoms/StyledButton';
import Link from 'next/link';

const CARDS_CLASS = 'service-card';

const Services = ({ servicesCards }) => {
    const dataArr = useMemo(() => servicesCards?.sort((a, b) => a?.order - b?.order), [servicesCards]);

    return (
        <div style={{ backgroundColor: 'rgb(244, 157, 42, .4)' }}>
            <div className="col-12">
                <StyledWrapper>
                    <H2 fontWeight="600" color="#400436" className="center">
                        Our Services
                    </H2>

                    <StyledCardWrapper className="service-cards-wrap ">
                        {dataArr?.slice(0, 4)?.map(({ id, title, description }) => (
                            <ServiceCard
                                className={CARDS_CLASS}
                                key={id}
                                title={title?.toLowerCase()}
                                description={description}
                            />
                        ))}
                    </StyledCardWrapper>

                    <div className="col-12">
                        <div
                            style={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <Link href="/services">
                                <a>
                                    <StyledButton>View all services</StyledButton>
                                </a>
                            </Link>
                        </div>
                    </div>
                </StyledWrapper>
            </div>
        </div>
    );
};

export default Services;
