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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
    color: rgba(64, 4, 54, 0.8);
    h2 {
        margin-bottom: 20px;
        line-height: 1;
    }

    p {
        font-size: 20px;
        line-height: 1.25;
        margin-bottom: 12px;
    }

    ul {
        padding: 0;
        margin: 0;

        li {
            font-size: 20px;
            margin-left: 20px;
            &:not(:last-child) {
                margin-bottom: 8px;
            }
        }
    }
`;

export { StyledWrapper, StyledBlob };
