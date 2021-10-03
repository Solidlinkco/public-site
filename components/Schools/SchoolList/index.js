import React, { useMemo } from 'react';
import { StyledWrapper, StyledCountries, StyledCountriesItem } from './styled';
import { H2 } from '../../atoms/H2';
import { capitalize } from '../../helper';
import SchoolLayout from './Layout';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
const SchoolList = ({ schools, title, pageName, pageAlpha3 }) => {
    return (
        <SchoolLayout title={`${title} in ${capitalize(pageName)}`} pageAlpha3={pageAlpha3}>
            <div style={{ backgroundColor: 'rgb(244, 157, 42, .4)' }}>
                <div className="col-12">
                    <StyledWrapper>
                        {/* <StyledCountries> */}
                        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 500: 2, 650: 3, 900: 4 }}>
                            <Masonry gutter="32px">
                                {schools.map((school) => {
                                    return (
                                        <StyledCountriesItem key={school?.name}>
                                            <img src={school?.logo?.url ?? ''} alt={school?.name} />

                                            <p>{school?.name}</p>
                                        </StyledCountriesItem>
                                    );
                                })}
                            </Masonry>
                        </ResponsiveMasonry>
                    </StyledWrapper>
                </div>
            </div>
        </SchoolLayout>
    );
};

export default SchoolList;
