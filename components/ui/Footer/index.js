import { arrayOf, shape, string } from 'prop-types';
import React, { useMemo } from 'react';
import { StyledWrapper, StyledHeader, StyledSocial, StyledFooter, StyledFooterContent } from './styled';
import Image from 'next/image';
import Link from 'next/link';
import classes from '../Header/styled.module.scss';
import PhoneIcon from '@material-ui/icons/PhoneRounded';
import MailIcon from '@material-ui/icons/MailRounded';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import RoomIcon from '@material-ui/icons/Room';
import MainCTA from './MainCTA';
import { v4 } from 'uuid';

const SOCIAL_ICON_MAP = {
    facebook: FacebookIcon,
    twitter: TwitterIcon,
    instagram: InstagramIcon,
};
const RIGHT_MAP = ['facebook', 'twitter', 'instagram'];
const LEFT_MAP = ['phone', 'email'];
const FOOTER_CONTENT = [
    {
        title: 'Solidlink',
        links: [
            {
                label: 'Services',
                to: '/services',
            },
            {
                label: "Founder's profile",
                to: '/founders-profile',
            },
            {
                label: 'Contact',
                to: '/contact',
            },
            {
                label: 'Blog',
                to: '/blog',
            },
        ],
    },
    {
        title: 'Training',
        links: [
            {
                label: 'Corporate training',
                to: '/corporate-training',
            },
            {
                label: 'Bespoke training',
                to: '/bespoke-training',
            },
        ],
    },
    {
        title: 'Partners',
        links: [
            {
                label: 'Institutions',
                to: '/institutions',
            },
            {
                label: 'Secondary school',
                to: '/secondary-school',
            },
        ],
    },
];

const Footer = ({ contacts }) => {
    const date = new Date();
    const year = date.getFullYear();
    const leftMap = useMemo(() => contacts?.filter((el) => LEFT_MAP.includes(el?.type)) ?? [], [contacts]);
    const rightMap = useMemo(() => contacts?.filter((el) => RIGHT_MAP.includes(el?.type)) ?? [], [contacts]);
    const address = useMemo(() => contacts?.find((el) => el?.type === 'address'), [contacts]);

    return (
        <>
            <MainCTA />
            <StyledWrapper>
                <div className="col-12">
                    <StyledHeader>
                        <Link href="/">
                            <a>
                                <Image src="/assets/img/logo1.png" alt="solid-link co" width={80.3} height={50} />
                            </a>
                        </Link>
                        <StyledSocial>
                            {rightMap?.map(({ type, value }) => {
                                const Icon = SOCIAL_ICON_MAP[type] ?? SOCIAL_ICON_MAP.facebook;

                                return (
                                    <div key={value} className={classes.BannerWrapper__Bar}>
                                        <a href={value} className={classes.BannerWrapper__Bar_svg}>
                                            <Icon />
                                        </a>
                                    </div>
                                );
                            })}
                        </StyledSocial>
                    </StyledHeader>

                    <StyledFooterContent>
                        {FOOTER_CONTENT.map(({ title, links }) => (
                            <ul key={v4()}>
                                <p>{title}</p>
                                {links.map(({ to, label }) => (
                                    <li key={label}>
                                        <Link href={to}>
                                            <a>{label}</a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        ))}

                        <ul>
                            <p>Get in touch</p>
                            <li>
                                <span className="fz-14">
                                    <div className={classes.BannerWrapper__Bar_svg}>
                                        <RoomIcon />
                                    </div>
                                    {address?.value}
                                </span>
                            </li>
                        </ul>
                        <ul>
                            <p className="facade">&nbsp;</p>
                            {leftMap?.map(({ type, value }) => {
                                const href = type === 'phone' ? `tel:${value}` : `mailto:${value}`;
                                const Icon = type === 'phone' ? PhoneIcon : MailIcon;

                                return (
                                    <li key={v4()} className={classes.BannerWrapper__Bar}>
                                        <div className={classes.BannerWrapper__Bar_svg}>
                                            <Icon />
                                        </div>
                                        <a href={href} className="fz-14">
                                            {value}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </StyledFooterContent>

                    <StyledFooter>
                        <div className="right">&copy; {year} Solidlink|Edu Consulting. All Rights Reserved.</div>
                        <div className="left">
                            <Link href="/">
                                <a>PRIVACY POLICY</a>
                            </Link>
                            <Link href="/">
                                <a>TERMS AND CONDITIONS</a>
                            </Link>
                        </div>
                    </StyledFooter>
                </div>
            </StyledWrapper>
        </>
    );
};

Footer.propTypes = {
    contacts: arrayOf(
        shape({
            type: string,
            value: string,
        })
    ).isRequired,
};

export default Footer;