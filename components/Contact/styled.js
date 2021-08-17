import styled from 'styled-components';

const StyledWrapper = styled.div`
    .contact-page-banner {
        height: 300px;

        background-image: url('/assets/img/caleb-woods-RIcMwDLk1wo-unsplash.jpg');
        background-position: center 80%;
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;

        & > div {
            background-color: rgba(0, 0, 0, 0.5);
            width: 100%;
            height: 300px;
            display: flex;
            flex-flow: row wrap;
            justify-content: center;
            align-items: center;

            & > div {
                color: #fff;
                text-align: center;
                p {
                    max-width: 600px;
                }
            }
        }
    }
`;

const StyledContactCards = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: 20px 0 60px 0;

    @media screen and (min-width: 50em) {
        flex-direction: column;
        align-items: center;
        margin-bottom: 0;
    }
    & > :not(:last-child) {
        border-right: 1px solid #e6e9ec;

        @media screen and (min-width: 50em) {
            border-right: none;
        }
    }

    & > div {
        flex: 1;
        max-width: 350px;
        padding: 40px;
        min-height: 300px;
        text-align: center;
        color: #545a61;

        svg {
            font-size: 52px;
            color: #f49d2a;
            & + p {
                margin-top: 6px;
                margin-bottom: 20px;
                color: #400436;
            }
        }
    }
`;

export { StyledWrapper, StyledContactCards };
