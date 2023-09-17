import * as React from 'react'

import {StyledBrochureModal, StyledBackdrop, StyledCloseButton, StyledHeader,StyledBrochureContainer,  StyledBrochureCard} from "./BrochureModal.styled";
import {   H2 } from '../../../atoms/H2';
import PdfIcon from "./PdfIcon";
import { LINKS } from '../../../../constants/links';
import {useBrochureContext} from "./brochure-context"

const EXTERNAL_LINKS_PROPS = {
    target: '_blank',
    rel: 'noreferrer noopener',
}


const BrochureModal = () => {

    const { brochureOpen,
        toggleBrochure} = useBrochureContext();

        if(!brochureOpen) return null;

  return (
    <>
    <StyledBackdrop onClick={toggleBrochure}>&nbsp;</StyledBackdrop>
    <StyledBrochureModal>
        
        <StyledHeader>
<H2 fontWeight={600}>Download Brochure</H2>
            <StyledCloseButton onClick={toggleBrochure}><span>&times;</span></StyledCloseButton>
        </StyledHeader>

        <StyledBrochureContainer>

            <StyledBrochureCard href={LINKS.brochureUrl} {...EXTERNAL_LINKS_PROPS}>
                <PdfIcon />
                <p>Study Abroad: Universities</p>
            </StyledBrochureCard>

            <StyledBrochureCard href="/assets/solidLink-secondary-school-brochure-mini.pdf" {...EXTERNAL_LINKS_PROPS}>
            <PdfIcon />

                <p> Study Abroad: Secondary Schools and Colleges</p>
            </StyledBrochureCard>
        </StyledBrochureContainer>



    </StyledBrochureModal>
    </>
  )
}

export default BrochureModal