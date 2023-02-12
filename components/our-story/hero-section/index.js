import React, { useCallback } from 'react';
import { shape, string } from 'prop-types';
import { StyledWrapper, StyledHeroText, StyledBG } from './styled';

const Hero = ({ heroImage }) => {
    return (
        <StyledBG src={heroImage?.url}>
            <StyledWrapper>
                <StyledHeroText>
                    <h1>We Were Once You…</h1>
                    <p>Dreaming Of A Life Abroad Our Dream Has Come True We Want To Make Yours A Reality</p>
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
