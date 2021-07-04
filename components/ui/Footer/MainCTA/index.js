import React from "react";
import StyledButton from "../../../atoms/StyledButton";
import Link from "next/link";
import { StyledWrapper } from "./styled";

const MainCTA = () => {
    return (
        <StyledWrapper>
            <div className="col-12">
                <div className="cta-wrapper">
                    <h4>Ready to find out more?</h4>
                    <p>If you want to live your dream of studying overseas contact us today to start a hassle free application process. Do not be left behind.</p>

                    <Link href="/contact">
                        <a>
                            <StyledButton> Contact us</StyledButton>
                        </a>
                    </Link>
                </div>
            </div>
        </StyledWrapper>
    );
};

export default MainCTA;
