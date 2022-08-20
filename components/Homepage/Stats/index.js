import React, { useState, useEffect } from 'react';
import { StyledWrapper } from './styled';
import { P16B } from '../../atoms/P16B';
import { Binoculars, Plane, Institutions, Grad } from '../../../assets/icons';
import CountUp from 'react-countup';
import Hammer from 'react-hammerjs';
import TweenLite from 'gsap';

const STATS = [
    {
        label: 'PARTNER AGENTS',
        total: 50,
        icon: Binoculars,
    },
    {
        label: 'STUDENTS SENT ABROAD',
        total: 2500,
        icon: Plane,
    },
    {
        label: 'PARTNER INSTITUTIONS',
        total: 112,
        icon: Institutions,
    },
    {
        label: 'ALL GRADUATES',
        total: 3000,
        icon: Grad,
    },
];
const Stats = () => {
    const [position, setPosition] = useState(0);

    const handleSwipe = (swipeEvent) => {
        // const elements = document.getElementsByClassName(CARDS_CLASS).length;

        if (swipeEvent.direction == 2) {
            // left
            if (position < 2) {
                setPosition(position + 1);
            }
        } else if (swipeEvent.direction == 4) {
            // right
            if (position > 0) {
                setPosition(position - 1);
            }
        }
    };

    useEffect(() => {
        const swipeElement = document.getElementsByClassName('stats-wrap')[0];
        TweenLite.to(swipeElement, { duration: 0.3, ease: ' Power4.easeOut', x: -100 * position + '%' });
    }, [position]);

    return (
        <div className="col-12">
            <Hammer onSwipe={handleSwipe}>
                <StyledWrapper className="stats-wrap">
                    {STATS.map(({ label, total, icon }) => {
                        const Icon = icon;

                        return (
                            <div key={label}>
                                <Icon />
                                <i>
                                    <CountUp end={total} duration={2.5} />
                                </i>
                                <P16B color="#400436">{label}</P16B>
                            </div>
                        );
                    })}
                </StyledWrapper>
            </Hammer>
        </div>
    );
};

export default Stats;
