
import * as React from 'react';
import { arrayOf, shape, string } from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';
import styled from 'styled-components';
import FloatingComponent from './FloatingComponent';
import BrochureModal from './BrochureModal/BrochureModal';
import {BrochureProvider} from "./BrochureModal/brochure-context"

const StyledMain = styled.main`
    padding-top: 120px;

    max-width: 100vw;
    overflow: hidden;

    @media screen and (max-width: 61.5em) {
        padding-top: 77px;
    }
`;

const Layout = ({ children, contacts }) => {
const [brochureOpen, setBrochureOpen] = React.useState(false);

const toggleBrochure = () => {
    setBrochureOpen(prevState => !prevState);
};

    return (
        <BrochureProvider value={{
            brochureOpen,
            toggleBrochure,
        }}>
            <Header contacts={contacts} />
            <StyledMain>{children}</StyledMain>

            <BrochureModal />
            <FloatingComponent />
            <Footer contacts={contacts} />
        </BrochureProvider>
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
