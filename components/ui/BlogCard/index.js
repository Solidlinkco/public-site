import React from 'react';
import { StyledCard } from './styled';
import { P18B } from '../../atoms/P18B';
import { P16 } from '../../atoms/P16';
import { P14 } from '../../atoms/P14';

import Link from 'next/link';
import format from 'date-fns/format';
import { enGB } from 'date-fns/locale';

const ServiceCard = ({ data, className, replaceN }) => {
    const date = format(new Date(data.publishedAt), 'dd/MM/yyyy', {
        locale: enGB,
    });
    return (
        <StyledCard className={className}>
            <div className="image">
                <img src={data?.image?.url} alt={`solid-link-co-${data?.title}`} />
            </div>
            <div className="texts">
                <P18B textTransform="capitalize" color="#400436">
                    {data?.title}
                </P18B>
                <P14 margin="8px 0 16px 0">Date Published: {date}</P14>

                <P16 color="#797979">
                    {replaceN ? data?.content?.text?.replace(/\\n/gi, ' ')?.substring(0, 320)?.trim() + '...' : null}
                </P16>
            </div>
            <div className="read-more">
                <Link href={`/blog/${data?.blogSlug}`}>
                    <a>Read more &#xbb;</a>
                </Link>
            </div>
        </StyledCard>
    );
};

export default ServiceCard;
