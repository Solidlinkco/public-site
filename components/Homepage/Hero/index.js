import React, { useCallback } from "react";
import { shape, string } from "prop-types";
import { StyledWrapper, StyledHeroText } from "./styled";
import { openPopupWidget } from "react-calendly";

const TEXT = `APPLY TO AN INSTITUTION OF YOUR CHOICE OVERSEAS`;

const Hero = ({ heroImage }) => {
    const handleConsultation = useCallback(() => {
        console.log("clicked");
        openPopupWidget({ url: "https://calendly.com/farouqbabcock" });
    }, []);
    return (
        <StyledWrapper src={heroImage?.url}>
            <StyledHeroText>
                <h1>
                    APPLY TO <br />
                    AN INSTITUTION OF
                    <br /> YOUR CHOICE OVERSEAS
                </h1>
                <button onClick={handleConsultation} type="button">
                    Book a consultation
                </button>
            </StyledHeroText>
        </StyledWrapper>
    );
};
Hero.propTypes = {
    heroImage: shape({
        url: string,
    }).isRequired,
};
export default Hero;
