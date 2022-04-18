import styled, { keyframes, css } from 'styled-components';

const StyledWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(64, 4, 54, 0) !important;
    padding: 40px 0 0 0;
    flex-flow: row wrap;

    ${({ $reverse }) =>
        $reverse &&
        css`
            flex-direction: row-reverse;
        `};

    & > div {
        display: block;
        width: 100%;
        flex: 1;
        padding: 16px;
        align-items: center;
        img {
            width: 100%;
            border-radius: 10px;
            overflow: hidden;
        }
    }

    @media screen and (max-width: 56.25em) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const StyledBlob = styled.div`
    p {
        font-size: 16px;
        line-height: 1.25;
        color: rgba(64, 4, 54, 0.8);
        margin-bottom: 12px;
    }
`;

export { StyledWrapper, StyledBlob };
