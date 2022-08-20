import styled from 'styled-components';

export const StyledFilterWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    margin-bottom: 40px;
    & > div {
        flex: 1;
    }

    & > .react-select {
        margin-left: 30px !important;
        flex: 1;
    }

    & .react-select__control {
        min-height: 54px;
    }
`;
