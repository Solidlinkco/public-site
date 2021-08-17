import React from 'react';
import { StyledCard } from './styled';
import { P16B } from '../../atoms/P16B';
import { P14 } from '../../atoms/P14';
import { Support, VisaApp, PlaneArrival, Grad } from '../../../assets/icons';

const ICON_MAP = {
    'visa support': Support,
    'college application': VisaApp,
    'education counselling': Grad,
    'airport pickups': PlaneArrival,
};

const ServiceCard = ({ className, title, description }) => {
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
                <P14 lineHeight="1.45" color="#797979">
                    {description}
                </P14>
            </div>
        </StyledCard>
    );
};

export default ServiceCard;
