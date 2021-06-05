import { arrayOf, shape, string } from "prop-types";

import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import styled from "styled-components";

const StyledMain = styled.main`
    padding-top: 120px;
`;

const Layout = ({ children, contacts }) => {
    return (
        <>
            <Header contacts={contacts} />
            <StyledMain>{children}</StyledMain>
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
