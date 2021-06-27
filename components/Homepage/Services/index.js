import React, { useState, useEffect, useMemo } from "react";
import { StyledWrapper, StyledCardWrapper } from "./styled";
import { H2 } from "../../atoms/H2";
import Hammer from "react-hammerjs";
import TweenLite from "gsap";
import ServiceCard from "../../ui/ServiceCard";
import StyledButton from "../../atoms/StyledButton";
import Link from "next/link";

const CARDS_CLASS = "service-card";

const Services = ({ servicesCards }) => {
    const [position, setPosition] = useState(0);

    const dataArr = useMemo(() => servicesCards?.sort((a, b) => a?.order - b?.order), [servicesCards]);

    const handleSwipe = (swipeEvent) => {
        // const elements = document.getElementsByClassName(CARDS_CLASS).length;

        if (swipeEvent.direction == 2) {
            // left
            if (position < 3) {
                setPosition(position + 1);
            }
        } else if (swipeEvent.direction == 4) {
            // right
            if (position > 0) {
                setPosition(position - 1);
            }
        }
    };

    useEffect(() => {
        const swipeElement = document.getElementsByClassName("service-cards-wrap")[0];
        TweenLite.to(swipeElement, { duration: 0.3, ease: " Power4.easeOut", x: -100 * position + "%" });
    }, [position]);

    return (
        <div className="col-12">
            <StyledWrapper>
                <H2 fontWeight="600">Our Services</H2>
                <Hammer onSwipe={handleSwipe}>
                    <StyledCardWrapper className="service-cards-wrap ">
                        {dataArr?.slice(0, 4)?.map(({ id, title, description }) => (
                            <ServiceCard className={CARDS_CLASS} key={id} title={title?.toLowerCase()} description={description} />
                        ))}
                    </StyledCardWrapper>
                </Hammer>
                <div className="col-12 py20 ">
                    <Link href="/services">
                        <a>
                            <StyledButton>View all services</StyledButton>
                        </a>
                    </Link>
                </div>
            </StyledWrapper>
        </div>
    );
};

export default Services;
