import { arrayOf, shape, string } from 'prop-types';
import React, { useMemo } from 'react';
import PhoneIcon from '@material-ui/icons/PhoneRounded';
import classes from './styled.module.scss';
import MailIcon from '@material-ui/icons/MailRounded';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedIn from '@material-ui/icons/LinkedIn';

import HeaderBar from './Header';
import { v4 } from 'uuid';

const LEFT_MAP = ['phone', 'email'];
const RIGHT_MAP = ['facebook', 'twitter', 'linkedin', 'instagram'];

const SOCIAL_ICON_MAP = {
    facebook: FacebookIcon,
    twitter: TwitterIcon,
    instagram: InstagramIcon,
    linkedin: LinkedIn,
};

const Header = ({ contacts }) => {
    const leftMap = useMemo(() => contacts?.filter((el) => LEFT_MAP.includes(el?.type)) ?? [], [contacts]);
    const rightMap = useMemo(() => contacts?.filter((el) => RIGHT_MAP.includes(el?.type)) ?? [], [contacts]);

    return (
        <>
            <div className={classes.Banner}>
                <div className="col-12">
                    <div className={classes.BannerWrapper}>
                        <div className={classes.BannerWrapper__Left}>
                            {leftMap?.map(({ type, value }) => {
                                const href = type === 'phone' ? `tel:${value}` : `mailto:${value}`;
                                const Icon = type === 'phone' ? PhoneIcon : MailIcon;

                                return (
                                    <div key={v4()} className={classes.BannerWrapper__Bar}>
                                        <div className={classes.BannerWrapper__Bar_svg}>
                                            <Icon />
                                        </div>
                                        <a href={href} className="fz-16">
                                            {value}
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                        <div className={classes.BannerWrapper__Right}>
                            {rightMap?.map(({ type, value }) => {
                                const Icon = SOCIAL_ICON_MAP[type] ?? SOCIAL_ICON_MAP.facebook;
                                console.log('🚀 ~ file: index.js ~ line 53 ~ {rightMap?.map ~ Icon', type);

                                return (
                                    <div key={type} className={classes.BannerWrapper__Bar}>
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
                        </div>
                    </div>
                </div>
            </div>
            <HeaderBar />
        </>
    );
};

Header.propTypes = {
    contacts: arrayOf(
        shape({
            type: string,
            value: string,
        })
    ).isRequired,
};

export default Header;
export { SOCIAL_ICON_MAP, LEFT_MAP, RIGHT_MAP };
