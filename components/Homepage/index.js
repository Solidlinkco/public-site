import React from 'react';
import Layout from '../ui/Layout';
import { arrayOf, shape, string } from 'prop-types';
import Hero from './Hero';
import Institutions from './Institutions';
import Stats from './Stats';
// import Reviews from './Reviews';
import Services from './Services';
import Instagram from './Instagram';
import Youtube from './Youtube';
import BlogsEvents from './BlogsEvents';
import Countries from './Countries';
import Testimonials from './Testimonial';
import { MOCK_YOUTUBE } from './constant';
import ReferAndEarn from './ReferAndEarn/ReferAndEarn';


const Homepage = ({ contacts, homepage, reviews, servicesCards, schools, blog, events, youtube, testimonials }) => {
    return (
        <Layout contacts={contacts}>
            <Hero heroImage={homepage?.heroImage} />

            <Testimonials data={testimonials} videoId="xobXh-iC-K0" reverse />
            <Stats />

            <Institutions schools={schools} />
            <Countries schools={schools} />
            <Services servicesCards={servicesCards} />

            {/* <Reviews reviews={reviews} /> */}

            <Youtube data={youtube} />
            <ReferAndEarn />
            <BlogsEvents blog={blog} events={events} />
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
