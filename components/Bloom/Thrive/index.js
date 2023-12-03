import * as React from 'react';
import Image from 'next/image';
import StyledButton from '../../atoms/StyledButton';

import classes from './styled.module.scss';

const ThriveComponent = () => {
    return (
        <div className={classes.ThriveContainer}>
            <div className={classes.ThriveImage}>&nbsp;</div>

            <div className={classes.desc}>
                <Image src="/assets/img/logo-green.png" alt="solid-link co" width={80.3} height={50} />

                <h1 className="h2">Thrive as a global citizen</h1>

                <h2 className="h4">Unlock Your Potential as an Immigrant Abroad</h2>

                <p>
                    Our immigrant support services equip immigrants studying or living abroad with the resources they
                    need to thrive academically, socially and in their careers
                </p>

                <br />
                <br />
                <StyledButton as="a" href="/consultation-form">
                    Get Started
                </StyledButton>
            </div>
        </div>
    );
};

export default ThriveComponent;
