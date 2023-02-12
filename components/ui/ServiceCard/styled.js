import styled from 'styled-components';

const StyledCard = styled.div`
    width: 100%;
    max-width: 370px;
    border: 1px solid #ececec;
    border-radius: 12px;
    padding: 32px 24px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.02);
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    overflow: hidden;
    flex-wrap: nowrap;
    background-color: #fff;
    margin: 16px;

    @media screen and (max-width: 56.25em) {
        width: 100%;
        max-width: 100%;
        height: 100%;
        margin: 16px 0;
    }

    .icon {
        position: relative;
        width: 40px;
        color: #f49d2a;
        svg {
            position: absolute;
            top: 0;
            max-height: 32px;
        }
    }
    .texts {
        margin-top: 75px;
        font-size: 16px;
        margin-bottom: auto;
    }

    .cta {
        margin-top: 30px;

        a {
            color: #400436;
            cursor: pointer;
        }
    }
`;

export { StyledCard };
