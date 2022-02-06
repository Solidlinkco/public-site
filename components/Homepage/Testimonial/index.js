import React from 'react';
import { StyledWrapper, StyledBlob, Button } from './styled';
import ModalVideo from '../Youtube/ModalVideo';

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
                        <p>Sentence of emphasis</p>
                    </StyledBlob>
                    <Button>Get a free consultation</Button>
                </div>
            </StyledWrapper>
        </div>
    );
};

export default Testimonials;
