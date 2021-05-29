import { arrayOf, shape, string } from "prop-types";

import React from "react";
import Header from "../Header";
import Box from "@material-ui/core/Box";

const Layout = ({ children, contacts }) => {
    return (
        <Box>
            <Header contacts={contacts} />
            {children}
        </Box>
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
