import styled from 'styled-components';

const StyledWrapper = styled.footer`
    margin-top: auto;
    min-height: 400px;
    background-color: #400436;
    box-shadow: 0 -4px 4px rgba(32, 32, 32, 0.05);
    background-image: url('/assets/img/footer_bg.png');
    background-position: bottom center;
    background-size: cover;
    background-repeat: no-repeat;
`;
const StyledHeader = styled.div`
    display: flex;
    padding: 2.5rem 0;
    border-bottom: 1px solid #f49d2a; ;
`;

const StyledSocial = styled.div`
    display: flex;
    margin-left: auto;
    svg {
        color: #f49d2a;
    }
`;

const StyledFooter = styled.div`
    border-top: 1px solid #f49d2a;
    display: flex;
    margin-left: auto;
    font-size: 12px;
    padding: 18px;
    color: #f49d2a;
    .left {
        margin-left: auto;
        display: flex;
        a {
            font-size: 12px;
            margin-left: 24px;
        }
    }
    @media screen and (max-width: 56.25em) {
        flex-direction: column;
        .left {
            margin-left: 0;
            a {
                margin-left: 0;
                margin-right: 24px;

                &:first-child {
                    margin-right: auto;
                }
            }
        }
    }
`;
const StyledFooterContent = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 2.5rem 0;
    color: #f49d2a;

    @media screen and (max-width: 37.5em) {
        flex-direction: column;
        & .facade {
            display: none;
        }
    }
    ul {
        p {
            font-weight: 700;
            font-size: 24px;
            margin-bottom: 18px;
        }
        li {
            list-style-type: none;
            margin-bottom: 4px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-right: 22px;
            transition: all 0.3s ease-out;

            & > div {
                margin-top: 3px;
                margin-right: 8px;
            }
            & span {
                max-width: 200px;
                font-size: 14px !important;
                div {
                    display: inline;
                }
                & svg {
                    margin-top: 3px;
                    margin-right: 8px;
                }
            }

            a {
                &:hover {
                    opacity: 0.5;
                }
                font-size: 14px !important;
            }
        }
    }
`;

export { StyledWrapper, StyledHeader, StyledSocial, StyledFooter, StyledFooterContent };
