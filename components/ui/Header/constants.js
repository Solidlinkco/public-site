const LINK = [
    {
        label: 'Home',
        to: '/',
    },
    {
        label: 'About us',
        dropdown: true,
        nav: [
            {
                label: 'Services',
                to: '/services',
            },
            {
                label: "Founder's Profile",
                to: '/founders-profile',
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
                to: '/secondary-school',
            },
        ],
    },
    {
        label: 'Training',
        dropdown: true,
        nav: [
            {
                label: 'Bespoke training',
                to: '/bespoke-training',
            },
            {
                label: 'Corporate training',
                to: '/corporate-training',
            },
        ],
    },
    {
        label: 'Resources',
        dropdown: true,
        nav: [
            {
                label: 'Blog',
                to: '/blog',
            },
            {
                label: 'Events',
                to: '/events',
            },
        ],
    },
    {
        label: 'Contact',
        to: '/contact-us',
    },
];

export { LINK };
