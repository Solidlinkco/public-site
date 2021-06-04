import React, { useState, useEffect } from "react";
import Head from "next/head";
import Router from "next/router";

import PageLoader from "../components/ui/PageLoader";
import "../scss/master.scss";

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const start = () => {
            setLoading(true);
        };
        const end = () => {
            setLoading(false);
        };
        Router.events.on("routeChangeStart", start);
        Router.events.on("routeChangeComplete", end);
        Router.events.on("routeChangeError", end);
        return () => {
            Router.events.off("routeChangeStart", start);
            Router.events.off("routeChangeComplete", end);
            Router.events.off("routeChangeError", end);
        };
    }, []);

    return (
        <React.Fragment>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, max-width=1" />
                <title>Solid-Link Co</title>
                <link rel="apple-touch-icon" sizes="180x180" href="assets/img/social/favicons/apple-touch-icon.png" />
                <link rel="icon" type="/image/png" sizes="32x32" href="assets/img/social/favicons/favicon-32x32.png" />
                <link rel="icon" type="/image/png" sizes="16x16" href="assets/img/social/favicons/favicon-16x16.png" />
                <link rel="manifest" href="/assets/img/social/favicons/site.webmanifest" />
                <link rel="mask-icon" href="/assets/img/social/favicons/safari-pinned-tab.svg" color="#040a68" />
                <link rel="shortcut icon" href="/assets/img/social/favicons/favicon-32x32.png" />
                <meta name="msapplication-TileColor" content="#040a68" />
                <meta name="msapplication-config" content="/assets/img/social/favicons/browserconfig.xml" />
                <meta name="theme-color" content="#040a68" />
                <meta property="og:title" content="#" />
                <meta property="og:description" content="" />
                <meta name="description" content="" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content=".png" />
                <meta property="og:url" content=".com" />
                <meta name="robots" content="noindex"></meta>

                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
            </Head>
            {loading && <PageLoader />}
            <Component {...pageProps} />
        </React.Fragment>
    );
}

export default MyApp;
