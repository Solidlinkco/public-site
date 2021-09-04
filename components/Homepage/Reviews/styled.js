import styled from 'styled-components';

export const StyledWrapper = styled.div`
    padding: 80px 0;
    .reviews-header {
        display: flex;
        justify-content: center;
        align-items: center;

        &::before,
        &::after {
            content: '';
            position: relative;
            display: block;
            width: 100%;
            height: 1px;
            background-color: #400436;
        }

        svg {
            font-size: 30px;
            margin: 0 16px;
            color: #400436;
        }
    }

    h3 {
        font-size: 28px;
        text-align: center;
        margin: 16px 0 20px 0;
        color: #400436;
    }
`;

export const StyledReviews = styled.div`
    margin: 56px 0 36px 0;
    display: flex;
    justify-content: space-between;
    align-items: space-between;

    & > :not(:last-child) {
        margin-right: 16px;
    }

    @media screen and (max-width: 49.5em) {
        flex-direction: column;
        & > * {
            max-width: unset;
            min-height: unset;
            padding: 0 16px;
        }

        & > :not(:last-child) {
            margin-bottom: 32px;
        }
    }
`;
