import React from "react";
import Layout from "../ui/Layout";
import { arrayOf, shape, string } from "prop-types";
import Hero from "./Hero";

const Homepage = ({ contacts, homepage }) => {
    console.log("🚀 ~ file: index.js ~ line 6 ~ Homepage ~ homepage", homepage);
    return (
        <Layout contacts={contacts}>
            <Hero heroImage={homepage?.heroImage} />
        </Layout>
    );
};
Homepage.propTypes = {
    contacts: arrayOf(
        shape({
            type: string,
            value: string,
        })
    ).isRequired,
};
export default Homepage;
