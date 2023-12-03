import React from 'react';
import classes from './styled.module.scss';
import StyledButton from '../../atoms/StyledButton';

export const GetStarted = () => {
    return (
        <div className={classes.GetStarted_BG}>
            <div className="col-9 collapse-mobile centered">
                <div className={classes.GetStarted}>
                    <h4 className="h4">
                        Beyond resources, our immigrant support services give you
                        <br /> access to a community of immigrants (old and new),
                        <br /> leveraging the power of relationships to bring you
                        <br /> closer to your goals.
                    </h4>

                    <StyledButton height="55px" padding="16px 42px" bgcolor="#B46F13" as="a" href="/consultation-form">
                        Get Started
                    </StyledButton>
                </div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                <path class="elementor-shape-fill" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z" fill="#fff"></path>
            </svg>
        </div>
    );
};
