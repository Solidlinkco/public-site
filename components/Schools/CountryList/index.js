import React, { useMemo } from 'react';
import { StyledWrapper, StyledCountries, StyledCountriesItem } from './styled';
import { getIconUrl, COUNTRY_LIST } from '../../../constants/CountryIso';
import Link from 'next/link';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const generateList = (schools, title) => {
    if (title?.toLowerCase() === 'institutions') {
        return schools?.filter((el) => !el?.isSecondarySchool).map((el) => el?.country ?? '');
    }
    return schools?.filter((el) => el?.isSecondarySchool).map((el) => el?.country ?? '');
};

const CountryList = ({ schools, title }) => {
    const countries = useMemo(() => [...new Set(generateList(schools, title)?.filter(Boolean))] ?? [], [schools]);

    return (
        <div style={{ backgroundColor: 'rgb(244, 157, 42, .4)' }}>
            <div className="col-12">
                <StyledWrapper>
                    {/* <StyledCountries> */}
                    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 500: 2, 650: 3, 900: 4 }}>
                        <Masonry gutter="34px">
                            {countries.map((country) => {
                                const countryName = COUNTRY_LIST?.find((el) => el?.['alpha-3'] === country)?.name ?? '';

                                const countryLink = countryName?.toLowerCase()?.split(' ')?.join('-')?.trim();

                                return (
                                    <Link
                                        href={`/${title?.toLowerCase()?.split(' ')?.join('-')}/${countryLink}`}
                                        key={country}
                                    >
                                        <>
                                            <StyledCountriesItem>
                                                <img src={getIconUrl(country)} alt={country} />

                                                <p>{countryName}</p>
                                            </StyledCountriesItem>
                                        </>
                                    </Link>
                                );
                            })}
                        </Masonry>
                    </ResponsiveMasonry>
                    {/* </StyledCountries> */}
                </StyledWrapper>
            </div>
        </div>
    );
};

export default CountryList;
