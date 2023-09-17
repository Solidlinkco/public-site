import React, { useState } from 'react';
import classes from './Header.module.scss';
import MobileHeader from './MobileHeader';
import Link from 'next/link';
import Image from 'next/image';
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreRounded';
import { LINK } from '../constants';
import { useBrochureContext } from '../../Layout/BrochureModal/brochure-context';

const Header = () => {
    const [nav, setNav] = useState(false);
    const { 
        toggleBrochure} = useBrochureContext();

    return (
        <header className={classes.SolidLink}>
            <div className="col-12">
                <div className={classes.SolidLink__masthead}>
                    <div className={classes.SolidLink__logo}>
                        <Link href="/">
                            <>
                                <Image src="/assets/img/logo-green.png" alt="solid-link co" width={80.3} height={50} />
                            </>
                        </Link>
                    </div>

                    <nav className={[classes.SolidLink__nav, classes.SolidLink__nav__Desktop].join(' ')}>
                        {LINK.map(({ label, to, dropdown, nav }) => {
                            if (dropdown) {
                                return (
                                    <div key={label}>
                                        <p>
                                            {label}
                                            <span>
                                                <ExpandMoreIcon fontSize="large" />
                                            </span>
                                        </p>
                                        <ul>
                                            {nav.map(({ label: _label, to, external, brochure }) =>{ 
                                                
                                                    if(brochure) {
                                                        return (
                                                            <li key={_label}>
                                                    <a href="#" onClick={toggleBrochure}>
                                                        
                                                            {_label}
                                                     
                                                    </a>
                                                </li>
                                                        )
                                                    }
                                                
                                                
                                                
                                                return (
                                                <li key={_label}>
                                                    <Link href={to} {...(external && {
                                                                target: '_blank',
                                                                rel: 'noreferrer noopener',
                                                            })}>
                                                        
                                                            {_label}
                                                     
                                                    </Link>
                                                </li>
                                            )})}
                                        </ul>
                                    </div>
                                );
                            }

                            return (
                                <div className={classes.Navlinks} key={label}>
                                    <Link href={to}>
                                        <>{label}</>
                                    </Link>
                                </div>
                            );
                        })}
                    </nav>
                    <MobileHeader nav={nav} setNav={setNav} />
                </div>
            </div>
        </header>
    );
};

export default Header;
