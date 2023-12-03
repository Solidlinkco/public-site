import React from 'react';
import Layout from '../ui/Layout';
import ThriveComponent from './Thrive';
import { ImmigrantSupport } from './ImmigrantSupport';
import { Benefits } from './Benefits';
import { GetStarted } from './GetStarted';
import Countries from '../Homepage/Countries';
import classes from './styled.module.scss';
import { BloomReviews } from './BloomReviews';
import { BloomCTA } from './BloomCTA';

const BloomPageComponent = ({ contacts, schools }) => {
    return (
        <Layout contacts={contacts}>
            <ThriveComponent />
            <ImmigrantSupport />
            <Benefits />
            <GetStarted />
            <div className={classes.CountriesWrapper}>
                <Countries schools={schools} customTitle="COUNTRIES WE COVER" />
            </div>
            <BloomReviews />
            <BloomCTA />
        </Layout>
    );
};

export default BloomPageComponent;
