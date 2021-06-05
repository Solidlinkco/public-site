import React, { useCallback } from "react";
import { shape, string } from "prop-types";
import { StyledWrapper, StyledHeroText } from "./styled";
import { openPopupWidget, CalendlyEventListener } from "react-calendly";
import axios from "axios";
import { TEMPLATE, telegram, config, parseData } from "./constant";

const Hero = ({ heroImage }) => {
    const handleConsultation = useCallback(() => {
        openPopupWidget({ url: process.env.calendlyUrl });
    }, []);

    const sendMessage = useCallback((dataObj) => {
        axios.post(telegram(TEMPLATE(dataObj))).then((res) => {
            console.log(res);
        });
    }, []);

    const onEventScheduled = useCallback(async ({ data }) => {
        const _invitee = data?.payload?.invitee?.uri;
        const _event = data?.payload?.event?.uri;
        if (!data) {
            return;
        }
        try {
            const invitee = await axios.get(_invitee, config);
            const event = await axios.get(_event, config);
            const eventData = event?.data;
            const startDate = new Date(eventData?.resource?.start_time)?.toString();
            const payload = parseData(invitee?.data, startDate);
            sendMessage(payload);
        } catch (e) {}
    }, []);

    return (
        <StyledWrapper src={heroImage?.url}>
            <StyledHeroText>
                <h1>
                    APPLY TO AN <br />
                    INSTITUTION OF YOUR <br /> CHOICE OVERSEAS
                </h1>
                <button onClick={handleConsultation} type="button">
                    Book a consultation
                </button>
            </StyledHeroText>

            <CalendlyEventListener onEventScheduled={onEventScheduled} />
        </StyledWrapper>
    );
};
Hero.propTypes = {
    heroImage: shape({
        url: string,
    }).isRequired,
};
export default Hero;
