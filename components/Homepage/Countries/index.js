import React, { useRef, useEffect } from 'react';
import { getIconUrl, getCountryName } from '../../../constants/CountryIso';
import { StyledWrapper, StyledCountry } from './styled';
import { gsap } from 'gsap';
import { H2 } from '../../atoms/H2';

const Countries = ({ schools }) => {
    const leftRef = useRef(null);

    const countries = [...new Set(schools.map((school) => school.country))];
    const countriesWithUrl = countries.map((country) => ({
        country,
        url: getIconUrl(country),
        name: getCountryName(country),
    }));
    useEffect(() => {
        gsap.from(leftRef.current, {
            x: '80%',
            duration: 54,
            ease: 'slow(0.7, 0.7,0.7, 0.7, false)',
            yoyo: true,
            repeat: -1,
        });
    }, [leftRef]);

    return (
        <div>
            <div className="col-12 py20 center">
                <H2 fontWeight="600" color="#400436" margin="0 0 24px 0">
                    Countries
                </H2>
            </div>
            <StyledWrapper>
                <div ref={leftRef}>
                    {countriesWithUrl.map(({ country, url, name }) => (
                        <StyledCountry key={`ff${country}`}>
                            <img src={url} alt={country} />
                            <p>{name}</p>
                        </StyledCountry>
                    ))}
                    {countriesWithUrl.map(({ country, url, name }) => (
                        <StyledCountry key={`fd${country}`}>
                            <img src={url} alt={country} />
                            <p>{name}</p>
                        </StyledCountry>
                    ))}
                </div>
            </StyledWrapper>
        </div>
    );
};

export default Countries;
