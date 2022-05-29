import styled from 'styled-components';

export const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 48px;

    & div:not(:last-child) {
        margin-right: 24px;
    }

    @media screen and (max-width: 56.25em) {
        flex-direction: column;
        align-items: center;

        & div:not(:last-child) {
            margin-right: 0;
        }
    }
`;
