import React from 'react';
import classes from './styled.module.scss';

const REVS = [
    {
        name: 'Kehinde Shittu',
        role: 'MSc in International Tourism & Hospitality Management Griffith College, Limerick',
        Rev: () => (
            <p>
                The immigrant support assistance provided by Solid-Link is unparalleled in the industry. Their expertise
                streamlined my admission and visa application process, making it remarkably straightforward. Notably,
                they have successfully secured visas for both my husband and children, allowing them to visit me. As an
                alumnus of Babcock University, I wholeheartedly and without reservation endorse Solid-Link Consulting
                for all your Study Abroad requirements
            </p>
        ),
    },
    {
        name: 'Mrs. Cynthia Ekechi',
        role: 'Parent',
        Rev: () => (
            <>
                <p>
                    The entire immigration journey; from navigating through the intricate process of selecting the right
                    course, identifying suitable universities, and ultimately applying for visas can be overwhelmingly
                    complex. Regardless of how extensive one's research may be, the invaluable assistance of
                    professionals is an absolute necessity. This is where Solid-Link excels, streamlining this intricate
                    journey for both me as a parent and my sons.
                </p>
                <p>
                    With their exceptional services, ranging from aiding us in selecting the most appropriate courses to
                    facilitating college applications and securing visas, Dr. Niyi and his team ensured that we felt
                    completely at ease throughout the entire process. Their handling of all requirements at each stage
                    was marked by unwavering professionalism. What truly set them apart was the transparent and constant
                    communication they maintained with us, providing us with a sense of reassurance throughout.
                </p>
                <p>
                    I wholeheartedly recommend Solid-Link as the proven and reliable experts to turn to for all your
                    Immigration needs.
                </p>
            </>
        ),
    },
];

export const BloomReviews = () => {
    return (
        <div className={classes.BloomReviews_BG}>
            <div className="col-9 centered collpase-mobile">
                <div className={classes.BloomReviews}>
                    {REVS.map((rev, i) => {
                        return (
                            <div className={classes.Rev} key={i}>
                                <div className={classes.Rev__Content}>
                                    <rev.Rev />
                                </div>
                                <p className={classes.Rev__Name}>{rev.name}</p>
                                <p className={classes.Rev__Role}>{rev.role}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
