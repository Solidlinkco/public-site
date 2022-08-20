import React, { useMemo, useRef, useEffect } from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { StyledWrapper } from './styled';
import LazyLoad from 'react-lazyload-next';
import { H2 } from '../../atoms/H2';

import { gsap } from 'gsap';

const OFFSET = 300;

const Gallery = ({ images }) => {
    const leftRef = useRef(null);

    useEffect(() => {
        gsap.from(leftRef.current, {
            x: '80%',
            duration: 45,
            ease: 'slow(0.7, 0.7,0.7, 0.7, false)',
            yoyo: true,
            repeat: -1,
        });
    }, [leftRef]);

    return (
        <>
            <div className="col-12 py20 center">
                <H2 fontWeight="700" color="#400436" margin="0 0 24px 0">
                    Our Partners
                </H2>
            </div>
            <StyledWrapper>
                <div ref={leftRef}>
                    {images.map(({ url, fileName, id }) => (
                        <div key={`first-${id}`}>
                            <LazyLoad height={200} once offset={OFFSET}>
                                <img src={url} alt={fileName} key={fileName} />
                            </LazyLoad>
                        </div>
                    ))}
                    {images.map(({ url, fileName, id }) => (
                        <div key={`second-${id}`}>
                            <LazyLoad height={200} once offset={OFFSET}>
                                <img src={url} alt={fileName} key={fileName} />
                            </LazyLoad>
                        </div>
                    ))}
                </div>
            </StyledWrapper>
        </>
    );
};

Gallery.propTypes = {
    images: arrayOf(
        shape({
            fileName: string,
            url: string,
            id: string,
        })
    ).isRequired,
};
export default Gallery;
