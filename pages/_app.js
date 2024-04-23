import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';

import PageLoader from '../components/ui/PageLoader';
import '../scss/master.scss';
import '../scss/slider.css';
import 'react-day-picker/dist/style.css';

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const start = () => {
            setLoading(true);
        };
        const end = () => {
            setLoading(false);
        };
        Router.events.on('routeChangeStart', start);
        Router.events.on('routeChangeComplete', end);
        Router.events.on('routeChangeError', end);
        return () => {
            Router.events.off('routeChangeStart', start);
            Router.events.off('routeChangeComplete', end);
            Router.events.off('routeChangeError', end);
        };
    }, []);

    return (
        <React.Fragment>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, max-width=1" />
                <title>Solid-Link EDU Consulting</title>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                {/* <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
                    rel="stylesheet"
                /> */} 

                <meta
                    name="description"
                    content="Visa support, college applications, educational counselling and more! Contact our educational consultants to make your study abroad dreams a reality!"
                />

                {/* OG */}
                <meta property="og:site_name" content="Solidlinkco|Edu Consulting" />
                <meta property="og:locale" content="en_GB" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Educational Consultants - Helping Students from Nigeria | solidlinkco.com"
                />
                <meta
                    property="og:description"
                    content="Visa support, college applications, educational counselling and more! Contact our educational consultants to make your study abroad dreams a reality!"
                />
                <meta property="og:url" content="/icon.ico" />
                <meta property="og:image" content="/og.jpeg" />
            </Head>

            {loading && <PageLoader />}
            <Component {...pageProps} />
        </React.Fragment>
    );
}

export default MyApp;
