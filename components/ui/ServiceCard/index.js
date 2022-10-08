import React from 'react';
import { StyledCard } from './styled';
import { P16 } from '../../atoms/P16';
import { P18B } from '../../atoms/P18B';

import { P14 } from '../../atoms/P14';
import { Support, VisaApp, PlaneArrival, Grad, Remittance, CareerGuidance, Handshake } from '../../../assets/icons';

const ICON_MAP = {
    'visa support': Support,
    'college application': VisaApp,
    'education counselling': Grad,
    'airport pickups': PlaneArrival,
    remittances: Remittance,
    'career guidance': CareerGuidance,
    'pastoral care': Handshake,
};

const ServiceCard = ({ className, title, description, ctaUrl }) => {
    const Icon = ICON_MAP[title?.toLowerCase()] ?? ICON_MAP['visa support'];
    return (
        <StyledCard className={className}>
            <div className="icon">
                <Icon />
            </div>
            <div className="texts">
                <P18B color="#400436" textTransform="capitalize" margin="0 0 16px 0">
                    {title?.toLowerCase()}
                </P18B>
                <P16 lineHeight="1.3" color="#797979">
                    {description}
                </P16>
            </div>
            <div className="cta">
                <a href={ctaUrl} target="_blank" rel="noreferrer noopener">
                    Learn more &#xbb;
                </a>
            </div>
        </StyledCard>
    );
};

export default ServiceCard;
