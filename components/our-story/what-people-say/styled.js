import styled from 'styled-components';

export const StyledWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    margin-bottom: 48px;
    padding: 0 16px;

    & div:not(:last-child) {
        margin-bottom: 24px;
    }

    @media screen and (max-width: 56.25em) {
        flex-direction: column;
        align-items: center;

        & div:not(:last-child) {
            margin-right: 0;
        }
    }
`;
