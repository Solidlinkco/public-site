import styled from 'styled-components';

const StyledCard = styled.div`
    min-width: 280px;
    max-width: 280px;
    height: 360px;
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
    }

    .cta {
        margin-top: auto;

        a {
            color: #400436;
            cursor: pointer;
        }
    }
`;

export { StyledCard };
