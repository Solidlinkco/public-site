import styled from 'styled-components';

export const StyledWrapper = styled.div`
    padding: 20px 0;
    text-align: center;
    background-color: #f49d2a;

    .cta-wrapper {
        padding: 40px;
        color: #400436;

        p {
            margin: 20px auto 40px auto;
            max-width: 680px;
        }
    }
`;


export const StyledContainer = styled.div`
    display: flex;
    align-items: center;

    & div {

        flex: 1;
    }


    @media screen and (max-width: 825px) {
        flex-direction: column-reverse;
    }

`;

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

export const StyledButtons = styled.div`
    display: flex;
    justify-content: center;
    & > :first-child {
        margin-right: 16px;

        @media screen and (max-width: 56.25em) {
            margin-right: 0;
            margin-bottom: 48px;
        }
    }

    @media screen and (max-width: 56.25em) {
        flex-direction: column;
    }
`;
