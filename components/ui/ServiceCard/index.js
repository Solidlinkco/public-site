import React from 'react';
import { StyledCard } from './styled';
import { P16B } from '../../atoms/P16B';
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
                <P16B color="#400436" textTransform="capitalize" margin="0 0 16px 0">
                    {title?.toLowerCase()}
                </P16B>
                <P14 lineHeight="1.3" color="#797979">
                    {description}
                </P14>
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
