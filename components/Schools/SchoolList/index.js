import React, { useMemo } from 'react';
import { StyledWrapper, StyledCountriesItem } from './styled';

import SchoolLayout from './Layout';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import MultiSelect from '../MultiSelect';
import { useFilterSort } from '../../../hooks/useFilterSort';

const SchoolList = ({ schools, title, pageName, pageAlpha3 }) => {
    const { filterSortList } = useFilterSort(schools);
    return (
        <SchoolLayout>
            <div style={{ backgroundColor: 'rgb(244, 157, 42, .4)' }}>
                <div className="col-12">
                    <StyledWrapper>
                        {/* <StyledCountries> */}
                        <MultiSelect schools={schools} title={title} />
                        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 500: 2, 650: 3, 900: 4 }}>
                            <Masonry gutter="32px">
                                {filterSortList.map((school) => {
                                    return (
                                        <StyledCountriesItem key={school?.name}>
                                            <img
                                                src={school?.logo?.url ?? ''}
                                                alt={school.logoAltAttribute || school?.name}
                                            />

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
