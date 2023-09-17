import styled from 'styled-components';





export const StyledImageContainer = styled.div`



.mobile {
        display: none;
        visibility: hidden;
        opacity: 0;

    @media screen and (max-width: 825px) {
        display: block;

        visibility: visible;
        opacity: 1;
    }
}


@media screen and (max-width: 825px) {
      .desktop{ 
        display: none;
        visibility: hidden;
        opacity: 0;
      }
    }

img {
        max-width: 100%;
    }

`;
