import React from 'react';
import { StyledWrapper, StyledBlob, Button } from './styled';
import ModalVideo from '../Youtube/ModalVideo';
import { LINKS } from '../../../constants/links';

const Testimonials = ({ data, videoId, reverse }) => {
    const mainVideo = data?.find((item) => item.id?.videoId === videoId);

    if (!mainVideo) {
        return null;
    }

    return (
        <div className="col-12 collapse-mobile">
            <StyledWrapper $reverse={reverse}>
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
                <div>
                    <StyledBlob>
                        <p>
                            It's not just about making successful applications, it is about making your dreams come
                            true.
                        </p>
                        <p>&nbsp;</p>
                    </StyledBlob>
                    <a href={LINKS.getFreeConsultationUrl} target="_blank" rel="noreferrer noopener">
                        <Button as="span">Get a free consultation</Button>
                    </a>
                </div>
            </StyledWrapper>
        </div>
    );
};

export default Testimonials;
