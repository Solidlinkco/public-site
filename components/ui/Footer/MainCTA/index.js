import React from 'react';
import StyledButton from '../../../atoms/StyledButton';
import { StyledWrapper, StyledButtons } from './styled';
import { LINKS } from '../../../../constants/links';

const MainCTA = () => {
    return (
        <StyledWrapper>
            <div className="col-12">
                <div className="cta-wrapper">
                    <h4>Ready To Study Abroad?</h4>
                    <p className="fz-16">
                        If you want to live your dream of studying overseas contact us today to start a hassle free
                        application process. Do not be left behind.
                    </p>

                    <StyledButtons>
                        <a href={LINKS.contactUsFooterUrl} target="_blank" rel="noreferrer noopener">
                            <StyledButton as="span" bgcolor="#400436">
                                Contact us
                            </StyledButton>
                        </a>
                        <a href={LINKS.brochureUrl} target="_blank" rel="noreferrer noopener">
                            <StyledButton as="span" bgcolor="#400436">
                                Download Brochure
                            </StyledButton>
                        </a>
                    </StyledButtons>
                </div>
            </div>
        </StyledWrapper>
    );
};

export default MainCTA;
