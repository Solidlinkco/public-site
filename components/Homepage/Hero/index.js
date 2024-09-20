import React, { useCallback } from 'react';
import { shape, string } from 'prop-types';
import { StyledWrapper, StyledHeroText, StyledBG, StyledButtons } from './styled';
import { LINKS } from '../../../constants/links';
import { useBrochureContext } from '../../ui/Layout/BrochureModal/brochure-context';

const Hero = ({ heroImage }) => {
    const { toggleBrochure } = useBrochureContext();
    return (
        <StyledBG src={heroImage?.url}>
            <StyledWrapper>
                <StyledHeroText>
                    <h1>Want to study abroad?</h1>
                    <p>Secure admission to study in the UK, USA, Canada, Ireland & other top countries</p>
                    <StyledButtons>
                        <a href={LINKS.getStartedUrl}  rel="noreferrer noopener">
                            <span>Book Your Consultation</span>
                        </a>

                        <button onClick={toggleBrochure}>
                            <span>Download Brochure</span>
                        </button>
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
