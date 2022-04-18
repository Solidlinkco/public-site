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
                label: 'Secondary school',
                to: '/secondary-schools',
            },
        ],
    },
    {
        label: 'Agent',
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
                label: 'Download brochure',
                to: LINKS.brochureUrl,
                external: true,
            },
        ],
    },
    {
        label: 'Contact',
        to: '/contact-us',
    },
];

export { LINK };
