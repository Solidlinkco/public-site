import React from 'react';
import { StyledYoutubeWrapper, StyledVideoList } from './styled';

import StyledButton from '../../atoms/StyledButton';

import ModalVideo from './ModalVideo';
import isEmpty from 'lodash/isEmpty';

const YOUTUBE_CHANNEL_LINK = 'https://www.youtube.com/channel/UCwtQzFIU3yg_6_tu-ehMziQ/featured';
const MAIN_VIDEO_ID = '13MgKmaBZJ8';

const Youtube = ({ data }) => {
    const sortedData = data?.sort((a, b) => new Date(b.snippet?.publishTime) - new Date(a.snippet?.publishTime));

    const mainVideo = data?.find((item) => item.id?.videoId === MAIN_VIDEO_ID);

    if (isEmpty(data)) {
        return null;
    }

    return (
        <StyledYoutubeWrapper>
            <div>
                {mainVideo && (
                    <ModalVideo
                        isLarge
                        key={mainVideo.id?.videoId}
                        id={mainVideo.id?.videoId}
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
                                    key={id?.videoId}
                                    id={id?.videoId}
                                    title={snippet?.title}
                                    backdrop={snippet?.thumbnails?.high?.url}
                                    date={snippet?.publishTime}
                                />
                            ) : null
                        )}
            </StyledVideoList>

            {/* <div className="col-12 py20">
                    <a href={YOUTUBE_CHANNEL_LINK}>
                        <StyledButton>View all</StyledButton>
                    </a>
                </div> */}
            {/* </div> */}
        </StyledYoutubeWrapper>
    );
};

export default Youtube;
