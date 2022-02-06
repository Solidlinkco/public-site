import React, { useCallback } from 'react';
import { shape, string } from 'prop-types';
import { StyledWrapper, StyledHeroText, StyledBG, StyledButtons } from './styled';
import { openPopupWidget, CalendlyEventListener } from 'react-calendly';
import axios from 'axios';
import { TEMPLATE, telegram, config, parseData } from './constant';
import { LINKS } from '../../../constants/links';
import noop from 'lodash/noop';

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
        <StyledBG src={heroImage?.url}>
            <StyledWrapper>
                <StyledHeroText>
                    <h1>Want to study abroad?</h1>
                    <p>Admission, Visa Processing and all you'll ever need, we help you get it right, No Excuses</p>
                    <StyledButtons>
                        <a href={LINKS.getStartedUrl} target="_blank" rel="noreferrer noopener">
                            <button onClick={noop} type="button">
                                Get started
                            </button>
                        </a>
                        <a href={LINKS.brochureUrl} target="_blank" rel="noreferrer noopener">
                            <button onClick={noop} type="button">
                                Download Brochure
                            </button>
                        </a>
                    </StyledButtons>
                </StyledHeroText>

                <CalendlyEventListener onEventScheduled={onEventScheduled} />
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
