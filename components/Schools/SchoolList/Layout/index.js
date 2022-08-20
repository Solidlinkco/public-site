import React from 'react';
import { StyledWrapper } from './styled';
import { getIconUrl } from '../../../../constants/CountryIso';

const SchoolLayout = ({ children }) => {
    return <StyledWrapper>{children}</StyledWrapper>;
};

export default SchoolLayout;
