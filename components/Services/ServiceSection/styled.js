import styled from 'styled-components';

const StyledWrapper = styled.div`
    margin-bottom: 54px;
    padding: 80px 0 40px 0;
`;
const StyledCardWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    margin: 32px 0;
    flex-flow: row wrap;

    & > :not(:last-child) {
        margin-right: 12px;
    }

    & > * {
        margin-bottom: 32px;
    }
    @media screen and (max-width: 60.25em) {
        justify-content: flex-start;
        & > :not(:last-child) {
            margin-right: 32px;
        }
    }

    @media screen and (max-width: 25em) {
        & > :not(:last-child) {
            margin-right: 0;
        }
    }

    @media (max-width: 600px) {
        width: 296px;
    }
`;

export { StyledWrapper, StyledCardWrapper };
