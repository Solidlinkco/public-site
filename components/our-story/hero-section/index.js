import React, { useCallback } from 'react';
import { shape, string } from 'prop-types';
import { StyledWrapper, StyledHeroText, StyledBG } from './styled';

const Hero = ({ heroImage }) => {
    return (
        <StyledBG src={heroImage?.url}>
            <StyledWrapper>
                <StyledHeroText>
                    <h1>Once Victims, Now Saving Dreams</h1>
                    <p>Here's how it al started.</p>
                </StyledHeroText>
            </StyledWrapper>
        </StyledBG>
    );
};
Hero.propTypes = {
    heroImage: shape({
        url: string,
    }).isRequired,
};
export default Hero;
