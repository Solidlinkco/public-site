import React from 'react';
import { StyledYoutubeWrapper, StyledVideoList } from './styled';

import StyledButton from '../../atoms/StyledButton';

import ModalVideo from './ModalVideo';
import isEmpty from 'lodash/isEmpty';
import { H2 } from '../../atoms/H2';
const YOUTUBE_CHANNEL_LINK = 'https://www.youtube.com/channel/UCwtQzFIU3yg_6_tu-ehMziQ';
const MAIN_VIDEO_ID = 'mlhaGHbBlSo';

const Youtube = ({ data }) => {
    console.log('🚀 ~ file: index.js ~ line 13 ~ Youtube ~ data', data);
    const sortedData = data
        ?.sort((a, b) => new Date(b.snippet?.publishTime) - new Date(a.snippet?.publishTime))
        ?.filter((el) => el?.snippet?.resourceId?.videoId !== MAIN_VIDEO_ID);

    const mainVideo = data?.find((item) => item.snippet?.resourceId?.videoId === MAIN_VIDEO_ID);
    console.log('🚀 ~ file: index.js ~ line 19 ~ Youtube ~ mainVideo', mainVideo);

    if (isEmpty(data)) {
        return null;
    }

    return (
        <div className="col-12 collapse-mobile">
            <div className="col-12 py20 center">
                <H2 fontWeight="700" color="#400436" margin="24px 0 0 0">
                    Study Abroad Essentials
                </H2>
            </div>
            <StyledYoutubeWrapper>
                <div>
                    {mainVideo && (
                        <ModalVideo
                            isLarge
                            key={mainVideo.id}
                            id={mainVideo.snippet?.resourceId?.videoId}
                            title={mainVideo.snippet?.title}
                            backdrop={mainVideo.snippet?.thumbnails?.high?.url}
                        />
                    )}
                </div>

                {/* <div> */}
                <StyledVideoList>
                    {sortedData &&
                        sortedData
                            ?.slice(0, 4)
                            ?.map(({ id, snippet }) =>
                                id ? (
                                    <ModalVideo
                                        key={id}
                                        id={snippet?.resourceId?.videoId}
                                        title={snippet?.title}
                                        backdrop={snippet?.thumbnails?.high?.url}
                                        date={snippet?.publishTime}
                                    />
                                ) : null
                            )}
                </StyledVideoList>
            </StyledYoutubeWrapper>
            <div className="py20 center">
                <a href={YOUTUBE_CHANNEL_LINK}>
                    <StyledButton>Visit Our YouTube Channel</StyledButton>
                </a>
            </div>
            <div className="py20 center">&nbsp;</div>
        </div>
    );
};

export default Youtube;
