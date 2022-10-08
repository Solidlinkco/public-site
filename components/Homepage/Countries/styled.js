import styled from 'styled-components';

export const StyledWrapper = styled.div`
    width: 100%;
    overflow: hidden;
    overflow-x: scroll;
    padding-bottom: 40px;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
        display: none;
    }
    & > * {
        position: relative;
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
    }
`;

export const StyledCountry = styled.div`
    flex: 1;
    flex-wrap: nowrap;

    min-width: 260px;
    margin-right: 70px;

    background-color: rgba(64, 4, 54, 1);
    border-radius: 10px;
    padding: 10px;
    border: 1px solid rgb(244, 157, 42, 0.4);

    & img {
        width: 100%;
        border-radius: 10px;
        overflow: hidden;
    }

    p {
        color: rgb(244, 157, 42, 1);
        text-align: center;
        border-top: 1px solid rgb(244, 157, 42, 0.2);

        margin-top: 16px;
        font-weight: 600;
        font-size: 18px;
        padding: 16px 0 8px 0;
    }
`;
