import React, { useMemo, useRef, useEffect } from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { StyledWrapper } from './styled';
import LazyLoad from 'react-lazyload-next';
import { H2 } from '../../atoms/H2';
import StyledButton from '../../atoms/StyledButton';
import Link from 'next/link';
import { gsap } from 'gsap';

const SLICE = 6;
const OFFSET = 300;

const Institutions = ({ images }) => {
    const left = useMemo(() => images?.slice(0, SLICE), [images]);
    const right = useMemo(() => images?.slice(SLICE, images?.length), [images]);

    const leftRef = useRef(null);
    const rightRef = useRef(null);

    useEffect(() => {
        gsap.from(leftRef.current, {
            x: '80%',
            duration: 45,
            ease: 'slow(0.7, 0.7,0.7, 0.7, false)',
            yoyo: true,
            repeat: -1,
        });
    }, [leftRef]);

    useEffect(() => {
        gsap.from(rightRef.current, {
            x: '-80%',
            duration: 45,
            ease: 'slow(0.7, 0.7,0.7, 0.7, false)',
            yoyo: true,
            repeat: -1,
        });
    }, [rightRef]);

    return (
        <>
            <div className="col-12 py20">
                <H2 fontWeight="600" color="#400436">
                    Our Partners
                </H2>
            </div>
            <StyledWrapper>
                <div ref={leftRef}>
                    {left.map(({ url, fileName }) => (
                        <div>
                            <LazyLoad height={200} once offset={OFFSET}>
                                <img src={url} alt={fileName} key={fileName} />
                            </LazyLoad>
                        </div>
                    ))}
                    {left.map(({ url, fileName }) => (
                        <div>
                            <LazyLoad height={200} once offset={OFFSET}>
                                <img src={url} alt={fileName} key={fileName} />
                            </LazyLoad>
                        </div>
                    ))}
                </div>

                <div ref={rightRef}>
                    {right.map(({ url, fileName }) => (
                        <div>
                            <LazyLoad height={200} once offset={OFFSET}>
                                <img src={url} alt={fileName} key={fileName} />
                            </LazyLoad>
                        </div>
                    ))}
                    {right.map(({ url, fileName }) => (
                        <div>
                            <LazyLoad height={200} once offset={OFFSET}>
                                <img src={url} alt={fileName} key={fileName} />
                            </LazyLoad>
                        </div>
                    ))}
                </div>
            </StyledWrapper>
            <div className="col-12 py20">
                <Link href="/">
                    <a>
                        <StyledButton>View all institutions</StyledButton>
                    </a>
                </Link>
            </div>
        </>
    );
};

Institutions.propTypes = {
    images: arrayOf(
        shape({
            fileName: string,
            url: string,
        })
    ).isRequired,
};
export default Institutions;
