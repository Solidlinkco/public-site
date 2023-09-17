import React, { useState } from 'react';
import Link from 'next/link';
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreRounded';

import classes from './Header.module.scss';
import { StyledDropDownContainer, StyledDropDownSubItems } from './styled';
import { useBrochureContext } from '../../Layout/BrochureModal/brochure-context';

const MobileDropdown = ({ label, nav }) => {
    const [showDropDown, setShowDropDown] = useState(false);
    const toggleDropDown = () => setShowDropDown((prevState) => !prevState);
    const { toggleBrochure } = useBrochureContext();


    const onBrochureClick = () => {
        toggleBrochure();
        toggleDropDown();
    }

    return (
        <StyledDropDownContainer>
            <p onClick={toggleDropDown}>
                {label}
                <span>
                    <ExpandMoreIcon fontSize="large" />
                </span>
            </p>
            <StyledDropDownSubItems $isOpen={showDropDown}>
                {nav.map(({ label, to, external, brochure }) => {


if(brochure) {


    return (
        <div className={classes.Navlinks} key={label}>
            <a href="#" onClick={onBrochureClick}>
                
                    {label}
               
            </a>
        </div>
    )
}

return (
    <div className={classes.Navlinks} key={label}>
        <Link href={to}  {...(external && {
                    target: '_blank',
                    rel: 'noreferrer noopener',
                })}>
            
                {label}
           
        </Link>
    </div>
)
                })}
            </StyledDropDownSubItems>
        </StyledDropDownContainer>
    );
};

export default MobileDropdown;
