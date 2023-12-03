import React from 'react';
import classes from './styled.module.scss';
import { Support, VisaApp, PlaneArrival, Grad, Remittance, CareerGuidance, Group } from '../../../assets/icons';

const TopBlob = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            height="64px"
            width="100%"
        >
            <path
                fill="#fff"
                opacity="0.33"
                d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
            ></path>
            <path
                fill="#fff"
                opacity="0.66"
                d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
            ></path>
            <path
                fill="#fff"
                d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
            ></path>
        </svg>
    );
};

const BottomBlob = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2600 131.1" preserveAspectRatio="none">
            <path class="elementor-shape-fill" d="M0 0L2600 0 2600 69.1 0 0z"></path>
            <path
                class="elementor-shape-fill"
                style={{
                    opacity: 0.5,
                }}
                d="M0 0L2600 0 2600 69.1 0 69.1z"
            ></path>
            <path
                class="elementor-shape-fill"
                style={{
                    opacity: 0.25,
                }}
                d="M2600 0L0 0 0 130.1 2600 69.1z"
            ></path>
        </svg>
    );
};

const FLEX_CONTENT = [
    {
        title: 'Academics',
        desc: 'From study support to reading tips and examination prep, Bloom will be with you every step of the way in your academic journey.',
        Icon: Grad,
    },
    {
        title: 'Career',
        desc: 'We help you identify job and internship opportunities in line with your career goals with CV writing and inteview preps included. ',
        Icon: CareerGuidance,
    },
    {
        title: 'Cultural Adaptation Support',
        desc: 'We provide you the kind of help and support only a community can afford you with benefits like Networking and emergency assistance',
        Icon: Group,
    },
];

export const ImmigrantSupport = () => {
    return (
        <div className={classes.ImmigrantSupport}>
            <div className={classes.bgOverlay}>&nbsp;</div>

            <div className={classes.TopBlob}>
                <TopBlob />
            </div>

            <div className="col-6 centered collapse-mobile">
                <div className={classes.Desc}>
                    <h3 className="h2">About Our Immigrant Support Services</h3>
                    <br />

                    <p>
                        Moving abroad can be very challenging or extremely fulfilling depending on the information,
                        resources, and community you have access to. Our immigration support service provides existing
                        and aspiring immigrants with assistance tailored to helping them fulfil their ambitions and
                        manage their needs while studying abroad.
                    </p>
                    <p>
                        We offer ongoing support to students during their study abroad experience, including emergency
                        assistance, academic advice, and cultural adaptation support
                    </p>
                    <p>Below are some areas where this service can help you thrive</p>
                </div>
            </div>

            <div className="col-9 centered collapse-mobile">
                <div className={classes.FlexContainer}>
                    {FLEX_CONTENT.map((item, index) => (
                        <div className={classes.FlexContent} key={index}>
                            <div className={classes.FlexContent__Icon}>
                                <item.Icon />
                            </div>
                            <div className={classes.FlexContent__Texts}>
                                <p>{item.title}</p>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={classes.BottomBlob}>
                <BottomBlob />
            </div>
        </div>
    );
};
