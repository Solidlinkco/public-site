import React, { useCallback } from 'react';
import { shape, string } from 'prop-types';
import { StyledWrapper, StyledHeroText, StyledBG, StyledButtons } from './styled';
import { LINKS } from '../../../constants/links';

const Hero = ({ heroImage }) => {
    return (
        <StyledBG src={heroImage?.url}>
            <StyledWrapper>
                <StyledHeroText>
                    <h1>Want to study abroad?</h1>
                    <p>Secure admission to study in the UK, USA, Canada, Ireland & other top countries</p>
                    <StyledButtons>
                        <a href={LINKS.getStartedUrl} target="_blank" rel="noreferrer noopener">
                            <span>Get started</span>
                        </a>
                        <a href={LINKS.brochureUrl} target="_blank" rel="noreferrer noopener">
                            <span>Download Brochure</span>
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
