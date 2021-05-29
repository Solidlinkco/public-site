const LINK = [
    {
        label: "Home",
        to: "/",
    },
    {
        label: "About us",
        dropdown: true,
        nav: [
            {
                label: "Services",
                to: "/services",
            },
            {
                label: "Founder's Profile",
                to: "/founders-profile",
            },
        ],
    },
    {
        label: "Partners",
        dropdown: true,
        nav: [
            {
                label: "Institutions",
                to: "/institutions",
            },
            {
                label: "Secondary school",
                to: "/secondary-school",
            },
        ],
    },
    {
        label: "Training",
        dropdown: true,
        nav: [
            {
                label: "Bespoke training",
                to: "/bespoke-training",
            },
            {
                label: "Corporate training",
                to: "/corporate-training",
            },
        ],
    },
    {
        label: "Contact",
        to: "/contact-us",
    },
    {
        label: "Blog",
        to: "/blog",
    },
];

export { LINK };
