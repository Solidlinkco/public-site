import React, { useState } from "react";
import classes from "./Header.module.scss";
import MobileHeader from "./MobileHeader";
import Link from "next/link";
import Image from "next/image";
import ExpandMoreIcon from "@material-ui/icons/ExpandMoreRounded";
import { LINK } from "../constants";

const Header = () => {
    const [nav, setNav] = useState(false);

    return (
        <header className={classes.SolidLink}>
            <div className="col-12">
                <div className={classes.SolidLink__masthead}>
                    <div className={classes.SolidLink__logo}>
                        <Link href="/">
                            <a>
                                <Image src="/assets/img/logo1.png" alt="solid-link co" width={80.3} height={50} />
                            </a>
                        </Link>
                    </div>

                    <nav className={[classes.SolidLink__nav, classes.SolidLink__nav__Desktop].join(" ")}>
                        {LINK.map(({ label, to, dropdown, nav }) => {
                            if (dropdown) {
                                return (
                                    <div>
                                        <p>
                                            {label}
                                            <span>
                                                <ExpandMoreIcon fontSize="large" />
                                            </span>
                                        </p>
                                        <ul>
                                            {nav.map(({ label, to }) => (
                                                <li>
                                                    <Link href={to}>
                                                        <a>{label}</a>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            }

                            return (
                                <div className={classes.Navlinks}>
                                    <Link href={to}>
                                        <a>{label}</a>
                                    </Link>
                                </div>
                            );
                        })}
                    </nav>
                    <MobileHeader nav={nav} setNav={setNav} />
                </div>
            </div>
        </header>
    );
};

export default Header;
