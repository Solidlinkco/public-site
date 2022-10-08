import React from 'react';
import { StyledCard } from './styled';
import { P24 } from '../../atoms/P24';
import { P16 } from '../../atoms/P16';
import { convertWAT } from '../../helper';

const Events = ({ title, eventSlug, dateAndTime, description, image, customDate, showDate, imageAltAttribute }) => {
    const date = !customDate && convertWAT(dateAndTime).toDateString();
    const time = !customDate && convertWAT(dateAndTime).toTimeString().substring(0, 5);
    // const day = date.getMonth();

    const _date = customDate || `${date.substring(4)}-${time} WAT`;

    return (
        <StyledCard>
            <div className="image">
                <img src={image?.url} alt={imageAltAttribute || `solid-link-co-${title}`} />
            </div>
            <div className="texts">
                <P24 textTransform="capitalize" color="#400436">
                    {title}
                </P24>

                <P16 margin="6px 0 12px 0" fontWeight="600" color="#797979">
                    {showDate ? _date : ''}
                </P16>

                <P16 margin="0 0 10px 0" color="#797979">
                    {description}
                </P16>
            </div>
        </StyledCard>
    );
};

Events.propTypes = {
    showDate: true,
};
export default Events;
