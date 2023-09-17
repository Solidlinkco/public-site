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
import { SOCIAL_ICON_MAP, LEFT_MAP, RIGHT_MAP } from '../Header';
import { LINKS } from '../../../constants/links';
import { useBrochureContext } from '../Layout/BrochureModal/brochure-context';

const FOOTER_CONTENT = [
    {
        title: 'Solidlink',
        links: [
            {
                label: 'Services',
                to: '/services',
            },
            {
                label: 'Our story',
                to: '/our-story',
            },
            {
                label: 'Our team',
                to: '/our-team',
            },
        ],
    },
    {
        title: 'Resources',
        links: [
            {
                label: 'Articles',
                to: '/articles',
            },
            {
                label: 'Events',
                to: '/events',
            },
            {
                label: 'Download brochure',
                to: "#",
                brochure: true,
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
                label: 'Secondary schools',
                to: '/secondary-school',
            },
        ],
    },
];

const Footer = ({ contacts }) => {
     const { toggleBrochure } = useBrochureContext();
    const date = new Date();
    const year = date.getFullYear();
    const leftMap = useMemo(
        () =>
            contacts?.filter((el) => LEFT_MAP.includes(el?.type))?.sort((a, b) => b.type?.localeCompare(a.type)) ?? [],
        [contacts]
    );
    const rightMap = useMemo(() => contacts?.filter((el) => RIGHT_MAP.includes(el?.type)) ?? [], [contacts]);
    const address = useMemo(() => contacts?.find((el) => el?.type === 'address'), [contacts]);

    return (
        <>
            <MainCTA />
            <StyledWrapper>
                <div className="col-12">
                    <StyledHeader>
                        <Link href="/">
                            <>
                                <Image src="/assets/img/logo-green.png" alt="solid-link co" width={80.3} height={50} />
                            </>
                        </Link>
                        <StyledSocial>
                            {rightMap?.map(({ type, value }) => {
                                const Icon = SOCIAL_ICON_MAP[type] ?? SOCIAL_ICON_MAP.facebook;

                                return (
                                    <div key={value} className={classes.BannerWrapper__Bar}>
                                        <a
                                            href={value}
                                            className={classes.BannerWrapper__Bar_svg}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                        >
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
                                {links.map(({ to, label, external, brochure }) => {

                                    if(brochure) {


                                       return (
                                            <li key={label}>
                                                <a href="#" onClick={toggleBrochure}>
                                                   
                                                        {label}
                                                
                                                </a>
                                            </li>
                                        )
                                    }


return (
    <li key={label}>
        <Link href={to}  {...(external && {
                    target: '_blank',
                    rel: 'noreferrer noopener',
                })}>
           
                {label}
        
        </Link>
    </li>
)
                                })}
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
                                <>PRIVACY POLICY</>
                            </Link>
                            <Link href="/">
                                <>TERMS AND CONDITIONS</>
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
