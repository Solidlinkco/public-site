import { LINKS } from '../../../constants/links';

const LINK = [
    {
        label: 'Home',
        to: '/',
    },
    {
        label: 'Services',
        to: '/services',
    },
    {
        label: 'About us',
        dropdown: true,
        nav: [
            {
                label: 'Our story',
                to: '/our-story',
            },
            {
                label: 'Our team',
                to: '/our-team',
            },
        ],
    },
    {
        label: 'Partners',
        dropdown: true,
        nav: [
            {
                label: 'Institutions',
                to: '/institutions',
            },
            {
                label: 'Secondary schools',
                to: '/secondary-school',
            },
        ],
    },
    {
        label: 'Agency',
        to: '/agent',
    },
    // {
    //     label: 'Training',
    //     dropdown: true,
    //     nav: [
    //         {
    //             label: 'Bespoke training',
    //             to: '/bespoke-training',
    //         },
    //         {
    //             label: 'Corporate training',
    //             to: '/corporate-training',
    //         },
    //     ],
    // },
    {
        label: 'Resources',
        dropdown: true,
        nav: [
            {
                label: 'Articles',
                to: '/articles',
            },
            {
                label: 'Events',
                to: '/events',
            },

            {
                label: 'Bloom',
                to: '/bloom',
            },

            {
                label: 'Contact Us',
                to: '/contact-us',
            },
            {
                label: 'Download brochure',
                to: '#',
                brochure: true,
            },
        ],
    },
    {
        label: 'Book Consultation',
        to: '/consultation-form',
    },
];

export { LINK };
