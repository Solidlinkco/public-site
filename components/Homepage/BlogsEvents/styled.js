import styled from 'styled-components';

export const StyledWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 100px 0;

    & > :first-child {
        flex: 1;
        padding-right: 48px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: space-between;

        & > :first-child {
            margin-bottom: 32px;
        }
    }
    & > :last-child {
        padding-left: 48px;
        flex: 1;

        @media screen and (max-width: 1315px) {
            padding-left: 0;
        }
    }

    & > :not(:last-child) {
        border-right: 1px solid #efefef;
        @media screen and (max-width: 1315px) {
            border-right: none;
        }
    }

    .major-link {
        margin-top: 48px;
    }

    @media screen and (max-width: 1315px) {
        flex-direction: column;
        & > :first-child {
            padding-right: 0;
        }

        & > :not(:last-child) {
            border-right: none;
        }

        & > :last-child {
            padding-left: 0;
            margin-top: 80px;
        }
    }
`;

export const StyledEventWrapper = styled.div`
    & > :not(:last-child) {
        margin-bottom: 32px;
    }
`;
