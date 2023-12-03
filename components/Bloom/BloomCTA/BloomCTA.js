import React from 'react';
import StyledButton from '../../atoms/StyledButton';
import classes from './styled.module.scss';

export const BloomCTA = () => {
    return (
        <div className={classes.BloomCTA_BG}>
            <div className="col-10 collapse-mobile centered">
                <div className={classes.BloomCTA}>
                    <h3>BECOME OUR NEXT SUCCESS STORY</h3>

                    <StyledButton height="55px" padding="16px 42px" bgcolor="#400436" as="a" href="/consultation-form">
                        GET IN TOUCH
                    </StyledButton>
                </div>
            </div>
        </div>
    );
};

export default BloomCTA;
