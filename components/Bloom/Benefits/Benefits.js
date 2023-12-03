import React from 'react';
import classes from './styled.module.scss';
import { Check } from './Check';

const BENEFITS = [
    {
        imgUrl: '/assets/img/bloom/academic.jpg',
        title: 'Academic Benefits',
        fetautes: [
            'Reading Groups',
            'Assignment Assistance',
            'Study Materials',
            'Internship opportunities',
            'Academic Advice',
            'School Liasion',
        ],
    },
    {
        imgUrl: '/assets/img/bloom/career.jpg',
        title: 'Career Support',
        fetautes: [
            'Job opportunities',
            'Job referrals',
            'Career Mentorship',
            'Trainings/Skill Tooling',
            'CV Writing',
            'Interview Preparation',
            'Internship',
            'Job references',
        ],
    },
    {
        imgUrl: '/assets/img/bloom/social.jpg',
        title: 'Social Support',
        fetautes: ['Community Membership', 'Accomodation Assistance', 'Networking with old & new students'],
    },
    {
        imgUrl: '/assets/img/bloom/career.jpg',
        title: 'Immigration Consultation',
        fetautes: [
            'Program and school selection',
            'Application assistance',
            'Visa assistance',
            'Financial aid and scholarship information',
            'Travel arrangements',
            'Pre-departure orientation',
        ],
    },
];

export const Benefits = () => {
    return (
        <div className={classes.Benefits_BG}>
            <div className="col-10 collapse-mobile centered">
                <div className={classes.Benefits}>
                    {BENEFITS.map((benefit, index) => {
                        return (
                            <div className={classes.Benefit} key={benefit.title}>
                                <div className={classes.Benefit__img}>
                                    <img src={benefit.imgUrl} alt={benefit.title} />
                                </div>
                                <div className={classes.Benefit__content}>
                                    <h3 className={`h2 ${classes.Benefit__title}`}>{benefit.title}</h3>
                                    <ul className={classes.Benefit__list}>
                                        {benefit.fetautes.map((fetaute, index) => {
                                            return (
                                                <li key={index}>
                                                    <Check /> {fetaute}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
