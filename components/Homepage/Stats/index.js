import React from 'react';
import { StyledWrapper } from './styled';
import { P16B } from '../../atoms/P16B';
import { Binoculars, Plane, Institutions, Grad } from '../../../assets/icons';
import CountUp from 'react-countup';  


const STATS = [
    {
        label: 'STUDENTS SENT ABROAD',
        total: 500,
        icon: Plane,
    },
    {
        label: 'YEARS IN BUSINESS',
        total: 10,
        icon: Grad,
    },
    {
        label: 'PARTNER SCHOOLS',
        total: 150,
        icon: Institutions,
    },
    {
        label: 'PARTNER COUNTRIES',
        total: 50,
        icon: Binoculars,
    },
];
 
const Stats = () => { 
    return (
        <div className="col-12"> 
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
        </div>
    );
};

export default Stats;
