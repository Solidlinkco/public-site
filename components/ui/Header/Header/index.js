import React from "react";
import classes from "./styled.module.scss";
import Link from "next/link";
import Image from "next/image";

const LINK = [
    {
        label: "Home",
        to: "/",
    },
    {
        label: "About Us",
        to: "/about-us",
    },
    {
        label: "Institutions",
        to: "/institutions",
    },
    {
        label: "Secondary school",
        to: "/secondary-school",
    },
    {
        label: "Training",
        to: "/training",
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

const HeaderBar = () => {
    return (
        <div className={classes.Masthead}>
            <div className="col-12">
                <div className={classes.Masthead__Wrapper}>
                    <div className={classes.Masthead__Left}>
                        <Link href="/">
                            <a>
                                <Image src="/assets/img/logo1.png" alt="solid-link co" width={90.3} height={60} />
                            </a>
                        </Link>
                    </div>

                    <div className={classes.Masthead__Right}>
                        {LINK.map(({ to, label }) => (
                            <Link href={to}>
                                <a className="fz-14">{label}</a>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderBar;
