import styled, { keyframes, css } from 'styled-components';

const StyledWrapper = styled.div`
    width: 100%;
    display: flex;
    background-color: rgba(64, 4, 54, 0) !important;
    padding: 40px 0;
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
        /* height: 415px; */
        /* overflow-y: auto;
        @media screen and (max-width: 31.25em) {
            overflow-y: visible;
        } */
    }

    @media screen and (max-width: 56.25em) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const StyledBlob = styled.div`
    p:first-child {
        font-weight: 700;
        font-size: 50px;
        line-height: 1.2;
        max-width: 95%;
        color: rgba(64, 4, 54, 1);

        @media screen and (max-width: 1108px) {
            font-size: 40px;
            line-height: 1.2;
        }
    }
    p:last-child {
        font-weight: 600;
        font-size: 20px;
        line-height: 1.2;
        color: rgba(64, 4, 54, 0.8);
        margin-bottom: 40px;
    }
`;

const upFrame = keyframes`
    from {
        transform: translateY(20px);
        opacity: 0;
    }to{
        transform: translateY(0);
        opacity: 1;
    }
`;

const animate = css`
    animation: ${upFrame} 0.3s ease-out;
    animation-fill-mode: backwards;
`;

const Button = styled.button`
    background-color: #73d97a;
    border: none;
    padding: 16px 24px;
    outline: none;
    border-radius: 10px;
    color: #fff;
    ${animate};
    animation-delay: 0.5s;
    transform: translateY(0);
    opacity: 1;
    cursor: pointer;
    transition: all 0.3s ease-out;
    font-size: 18px;
    /* width: 320px; */
    font-weight: 600;
    align-self: flex-start;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    margin: 0 auto;
    min-width: 200px;

    &:hover {
        background-color: #56b55b;
    }
`;

export { StyledWrapper, StyledBlob, Button };
