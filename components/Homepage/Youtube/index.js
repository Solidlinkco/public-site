import React, { useState, useEffect } from "react";
import { StyledWrapper } from "./styled";
// import { H2 } from "../../atoms/H2";
import StyledButton from "../../atoms/StyledButton";
import Link from "next/link";
import axios from "axios";
import ModalVideo from "./ModalVideo";
import isEmpty from "lodash/isEmpty";
import Hammer from "react-hammerjs";
import TweenLite from "gsap";

const YOUTUBE_CHANNEL_LINK = "/";

const Youtube = ({ id }) => {
    const [data, setData] = useState([]);
    const [position, setPosition] = useState(0);

    useEffect(() => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${process.env.youtubeChannelID}&maxResults=4&type=video&key=${process.env.youTubeAPIKey}`).then((res) => {
            setData(res?.data?.items);
        });
    }, [id]);

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
        const swipeElement = document.getElementsByClassName("videos-list")[0];
        TweenLite.to(swipeElement, { duration: 0.3, ease: " Power4.easeOut", x: -100 * position + "%" });
    }, [position]);

    if (isEmpty(data)) {
        return null;
    }

    return (
        <StyledWrapper>
            <div className="col-12">
                <Hammer onSwipe={handleSwipe}>
                    <div className="videos-list">
                        {data?.slice(0, 4)?.map(({ id, snippet }) => (id ? <ModalVideo key={id?.videoId} id={id?.videoId} title={snippet?.title} backdrop={snippet?.thumbnails?.default?.url} /> : null))}
                        {data?.slice(0, 4)?.map(({ id, snippet }) => (id ? <ModalVideo key={id?.videoId} id={id?.videoId} title={snippet?.title} backdrop={snippet?.thumbnails?.default?.url} /> : null))}
                        {data?.slice(0, 4)?.map(({ id, snippet }) => (id ? <ModalVideo key={id?.videoId} id={id?.videoId} title={snippet?.title} backdrop={snippet?.thumbnails?.default?.url} /> : null))}
                        {data?.slice(0, 4)?.map(({ id, snippet }) => (id ? <ModalVideo key={id?.videoId} id={id?.videoId} title={snippet?.title} backdrop={snippet?.thumbnails?.default?.url} /> : null))}
                    </div>
                </Hammer>

                <div className="col-12 py20">
                    <a href={YOUTUBE_CHANNEL_LINK}>
                        <StyledButton>View all</StyledButton>
                    </a>
                </div>
            </div>
        </StyledWrapper>
    );
};

export default Youtube;
