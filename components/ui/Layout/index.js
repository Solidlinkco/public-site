import { arrayOf, shape, string } from "prop-types";

import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children, contacts }) => {
    return (
        <>
            <Header contacts={contacts} />
            <main>{children}</main>
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
