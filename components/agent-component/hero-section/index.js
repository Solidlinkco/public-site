import React, { useCallback } from 'react';
import { shape, string } from 'prop-types';
import { LINKS } from '../../../constants/links';
import { StyledWrapper, StyledHeroText, StyledBG, StyledButtons } from './styled';

const Hero = ({ heroImage }) => {
    return (
        <StyledBG src={heroImage?.url}>
            <StyledWrapper>
                <StyledHeroText>
                    <h1>Earn Up To 100,000 Per Referral By Becoming A Solid-Link Agent</h1>
                    <p>Get Paid Making Dreams Come True.</p>

                    <StyledButtons>
                        <a href={LINKS.getStartedUrl} target="_blank" rel="noreferrer noopener">
                            <span>Register Now</span>
                        </a>
                    </StyledButtons>
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
