import React, { useCallback } from "react";
import { shape, string } from "prop-types";
import { StyledWrapper, StyledHeroText } from "./styled";
import { openPopupWidget, CalendlyEventListener } from "react-calendly";
import axios from "axios";

const TEXT = `APPLY TO AN INSTITUTION OF YOUR CHOICE OVERSEAS`;

const config = {
    headers: { Authorization: `Bearer ${process.env.calendly}` },
};

const telegram = "https://api.telegram.org/1827560082:AAGb5Ru5guKRsXIQBDB05oca0D3qi8rIMSo/getMe";

var settings = {
    headers: {
        "Content-Type": "application/json",
        "cache-control": "no-cache",
    },
    data: JSON.stringify({
        chat_id: "@fdev-test-channel",
        text: "testso teso",
    }),
};

const Hero = ({ heroImage }) => {
    const handleConsultation = useCallback(() => {
        openPopupWidget({ url: "https://calendly.com/farouqbabcock/consultation" });
    }, []);

    const sendMessage = () => {
        axios.post(telegram, settings).then((res) => {
            console.log(res);
        });
    };

    const onEventScheduled = useCallback(({ data }) => {
        const endpoint = data?.payload?.invitee?.uri;
        if (!data) {
            return;
        }
        axios
            .get(endpoint, config)
            .then(({ data }) => {
                console.log(data);
                const dataObj = data?.resource;

                const questionsObj = dataObj?.questions_and_answers;
                console.log("🚀 ~ file: index.js ~ line 33 ~ .then ~ questionsObj", questionsObj);

                const msgPayload = {
                    name: dataObj?.name,
                    email: dataObj?.email,
                    ...questionsObj,
                };
                console.log("🚀 ~ file: index.js ~ line 39 ~ .then ~ msgPayload", msgPayload);
            })
            .finally(() => console.log("complegeted call  api"));
    }, []);

    return (
        <StyledWrapper src={heroImage?.url}>
            <StyledHeroText>
                <h1>
                    APPLY TO AN <br />
                    INSTITUTION OF YOUR <br /> CHOICE OVERSEAS
                </h1>
                <button onClick={sendMessage} type="button">
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
