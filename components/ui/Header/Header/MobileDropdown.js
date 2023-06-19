import React, { useState } from 'react';
import Link from 'next/link';
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreRounded';

import classes from './Header.module.scss';
import { StyledDropDownContainer, StyledDropDownSubItems } from './styled';

const MobileDropdown = ({ label, nav }) => {
    const [showDropDown, setShowDropDown] = useState(false);
    const toggleDropDown = () => setShowDropDown((prevState) => !prevState);
    return (
        <StyledDropDownContainer>
            <p onClick={toggleDropDown}>
                {label}
                <span>
                    <ExpandMoreIcon fontSize="large" />
                </span>
            </p>
            <StyledDropDownSubItems $isOpen={showDropDown}>
                {nav.map(({ label, to, external }) => (
                    <div className={classes.Navlinks} key={label}>
                        <Link href={to}  {...(external && {
                                    target: '_blank',
                                    rel: 'noreferrer noopener',
                                })}>
                            
                                {label}
                           
                        </Link>
                    </div>
                ))}
            </StyledDropDownSubItems>
        </StyledDropDownContainer>
    );
};

export default MobileDropdown;
