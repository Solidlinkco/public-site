import React from 'react';
import classes from './Header.module.scss';
import Link from 'next/link';
import { LINK } from '../constants';
import MobileDropdown from './MobileDropdown';

const MobileHeader = ({ nav, setNav }) => {
    return (
        <nav className={[classes.SolidLink__nav__Mobile].join(' ')}>
            <input
                type="checkbox"
                className={classes.main_navigation__checkbox}
                id="navi-toggle"
                checked={nav}
                readOnly
            />
            <label
                htmlFor="navi-toggle"
                className={[classes.main_navigation__button, 'mobileToggler'].join(' ')}
                onClick={() => setNav(!nav)}
            >
                <span
                    className={[classes.main_navigation__hamburger, `${nav ? classes.hamOpen : ''}`].join(' ')}
                ></span>
            </label>
            <div
                className={[classes.SolidLink__MobileNav, 'mobileNav'].join(' ')}
                style={{ display: nav ? 'block' : 'none' }}
            >
                <div className={classes.SemiBox}>
                    {LINK.map(({ label, to, dropdown, nav }) => {
                        if (dropdown) {
                            return <MobileDropdown key={label} label={label} nav={nav} />;
                        }

                        return (
                            <div className={classes.Navlinks} key={label}>
                                <Link href={to}>
                                    <>{label}</>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

export default MobileHeader;
