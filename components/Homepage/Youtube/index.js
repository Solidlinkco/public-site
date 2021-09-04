import React, { useState, useEffect } from 'react';
import { StyledWrapper } from './styled';

import StyledButton from '../../atoms/StyledButton';

import axios from 'axios';
import ModalVideo from './ModalVideo';
import isEmpty from 'lodash/isEmpty';

const YOUTUBE_CHANNEL_LINK = '/';

const Youtube = ({ id }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(
                `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${process.env.youtubeChannelID}&maxResults=4&type=video&key=${process.env.youTubeAPIKey}`
            )
            .then((res) => {
                setData(res?.data?.items);
            });
    }, [id]);

    if (isEmpty(data)) {
        return null;
    }

    return (
        <StyledWrapper>
            <div className="col-12">
                <div className="videos-list">
                    {data
                        ?.slice(0, 4)
                        ?.map(({ id, snippet }) =>
                            id ? (
                                <ModalVideo
                                    key={id?.videoId}
                                    id={id?.videoId}
                                    title={snippet?.title}
                                    backdrop={snippet?.thumbnails?.default?.url}
                                />
                            ) : null
                        )}
                    {data
                        ?.slice(0, 4)
                        ?.map(({ id, snippet }) =>
                            id ? (
                                <ModalVideo
                                    key={id?.videoId}
                                    id={id?.videoId}
                                    title={snippet?.title}
                                    backdrop={snippet?.thumbnails?.default?.url}
                                />
                            ) : null
                        )}
                    {data
                        ?.slice(0, 4)
                        ?.map(({ id, snippet }) =>
                            id ? (
                                <ModalVideo
                                    key={id?.videoId}
                                    id={id?.videoId}
                                    title={snippet?.title}
                                    backdrop={snippet?.thumbnails?.default?.url}
                                />
                            ) : null
                        )}
                    {data
                        ?.slice(0, 4)
                        ?.map(({ id, snippet }) =>
                            id ? (
                                <ModalVideo
                                    key={id?.videoId}
                                    id={id?.videoId}
                                    title={snippet?.title}
                                    backdrop={snippet?.thumbnails?.default?.url}
                                />
                            ) : null
                        )}
                </div>

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
