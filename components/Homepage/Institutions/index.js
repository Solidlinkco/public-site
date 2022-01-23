import React, { useMemo, useRef, useEffect } from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { StyledWrapper } from './styled';
import LazyLoad from 'react-lazyload-next';
import { H2 } from '../../atoms/H2';
import StyledButton from '../../atoms/StyledButton';
import Link from 'next/link';
import { gsap } from 'gsap';

const SLICE = 12;
const OFFSET = 300;

const Institutions = ({ schools }) => {
    const images = schools;

    const left = useMemo(
        () =>
            schools
                ?.filter((el) => el.isSecondarySchool)
                .map((school) => school?.logo)
                .filter(Boolean)
                .slice(0, SLICE),
        [schools]
    );
    console.log('🚀 ~ file: index.js ~ line 17 ~ Institutions ~ left', left);
    const right = useMemo(
        () =>
            schools
                ?.filter((el) => !el.isSecondarySchool)
                .map((school) => school?.logo)
                .filter(Boolean)
                .slice(0, SLICE),
        [schools]
    );
    console.log('🚀 ~ file: index.js ~ line 18 ~ Institutions ~ right', right);

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
            <div className="col-12 py20 center">
                <H2 fontWeight="700" color="#400436" margin="0 0 24px 0">
                    Our Partners
                </H2>
            </div>
            <StyledWrapper>
                <div ref={leftRef}>
                    {left.map(({ url, fileName }) => (
                        <div key={url}>
                            <LazyLoad height={200} once offset={OFFSET}>
                                <img src={url} alt={fileName} key={fileName} />
                            </LazyLoad>
                        </div>
                    ))}
                    {left.map(({ url, fileName }) => (
                        <div key={url}>
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
            {/* <div className="col-12 py20">
                <Link href="/">
                    <a>
                        <StyledButton>View all institutions</StyledButton>
                    </a>
                </Link>
            </div> */}
        </>
    );
};

Institutions.propTypes = {
    schools: arrayOf(
        shape({
            fileName: string,
            url: string,
        })
    ).isRequired,
};
export default Institutions;
