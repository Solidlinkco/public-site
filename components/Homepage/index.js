import React from 'react';
import Layout from '../ui/Layout';
import { arrayOf, shape, string } from 'prop-types';
import Hero from './Hero';
import Institutions from './Institutions';
import Stats from './Stats';
import Reviews from './Reviews';
import Services from './Services';
import Instagram from './Instagram';
import Youtube from './Youtube';
import BlogsEvents from './BlogsEvents';

const Homepage = ({ contacts, homepage, reviews, servicesCards, instaData, blog, events }) => {
    return (
        <Layout contacts={contacts}>
            <Hero heroImage={homepage?.heroImage} />
            <Stats />
            <Services servicesCards={servicesCards} />
            <Institutions images={homepage?.institutionsblock} />
            <BlogsEvents blog={blog} events={events} />
            <Reviews reviews={reviews} />
            <Youtube />
            {/* <Instagram data={instaData} /> */}
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
