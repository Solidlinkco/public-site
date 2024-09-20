import React, { useMemo } from 'react';
import Masonry from "react-masonry-css";

import { StyledWrapper, StyledCountriesItem } from './styled';

import SchoolLayout from './Layout';
import MultiSelect from '../MultiSelect';
import { useFilterSort } from '../../../hooks/useFilterSort';


const breakpointColumnsObj = {
    default: 4,
    1310: 3,
    975: 2,
    619: 1
  }

const SchoolList = ({ schools, title, pageName, pageAlpha3 }) => {
    const { filterSortList } = useFilterSort(schools);
    return (
        <SchoolLayout>
            <div style={{ backgroundColor: 'rgb(244, 157, 42, .4)' }}>
                <div className="col-12">
                    <StyledWrapper>
                        {/* <StyledCountries> */}
                        <MultiSelect schools={schools} title={title} />
                        <Masonry  
                        breakpointCols={breakpointColumnsObj}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column">
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
                    </StyledWrapper>
                </div>
            </div>
        </SchoolLayout>
    );
};

export default SchoolList;
