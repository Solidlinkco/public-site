import React, { useEffect, useState } from "react";
import { H2 } from "../../atoms/H2";
import StyledButton from "../../atoms/StyledButton";
import Link from "next/link";
import { StyledWrapper } from "./styled";
import Hammer from "react-hammerjs";
import TweenLite from "gsap";

const INSTA_LINK = "https://www.instagram.com/solidlinkco/";
const CARDS_CLASS = "service-card";

const Instagram = ({ data }) => {
    const [position, setPosition] = useState(0);

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
        const swipeElement = document.getElementsByClassName("insta-grid")[0];
        TweenLite.to(swipeElement, { duration: 0.3, ease: " Power4.easeOut", x: -100 * position + "%" });
    }, [position]);

    return (
        <StyledWrapper>
            <div className="col-12 py20">
                <H2 fontWeight="600">Connect with us on Instagram</H2>
            </div>
            <Hammer onSwipe={handleSwipe}>
                <div class="insta-grid col-12">
                    {data?.map((url) => (
                        <img className={CARDS_CLASS} key={url} src={url} alt="solid-link-co" />
                    ))}
                </div>
            </Hammer>

            <div className="col-12 py20">
                <a href={INSTA_LINK} target="_blank" rel="noreferrer noopener">
                    <StyledButton>View all</StyledButton>
                </a>
            </div>
        </StyledWrapper>
    );
};

Instagram.propTypes = {};
export default Instagram;
