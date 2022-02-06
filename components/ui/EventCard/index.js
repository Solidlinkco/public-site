import React from 'react';
import { StyledCard } from './styled';
import { P18B } from '../../atoms/P18B';
import { P14 } from '../../atoms/P14';
import { convertWAT } from '../../helper';

const Events = ({ title, eventSlug, dateAndTime, description, image, customDate }) => {
    const date = !customDate && convertWAT(dateAndTime).toDateString();
    const time = !customDate && convertWAT(dateAndTime).toTimeString().substring(0, 5);
    // const day = date.getMonth();

    const _date = customDate || `${date.substring(4)}-${time} WAT`;

    return (
        <StyledCard>
            <div className="image">
                <img src={image?.url} alt={`solid-link-co-${title}`} />
            </div>
            <div className="texts">
                <P18B textTransform="capitalize" color="#400436">
                    {title}
                </P18B>
                <P14 margin="6px 0 6px 0" fontWeight="600" color="#797979">
                    {_date}
                </P14>
                <P14 margin="0 0 10px 0" color="#797979">
                    {description}
                </P14>
            </div>
        </StyledCard>
    );
};

export default Events;
