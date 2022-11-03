import { arrayOf, shape, string } from 'prop-types';

import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import styled from 'styled-components';
import FloatingComponent from './FloatingComponent';

const StyledMain = styled.main`
    padding-top: 120px;

    max-width: 100vw;
    overflow: hidden;

    @media screen and (max-width: 61.5em) {
        padding-top: 77px;
    }
`;

const Layout = ({ children, contacts }) => {
    return (
        <>
            <Header contacts={contacts} />
            <StyledMain>{children}</StyledMain>
            <FloatingComponent />
            <Footer contacts={contacts} />
        </>
    );
};

Layout.propTypes = {
    contacts: arrayOf(
        shape({
            type: string,
            value: string,
        })
    ).isRequired,
};

export default Layout;
