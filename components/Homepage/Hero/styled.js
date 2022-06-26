import styled, { keyframes, css } from 'styled-components';

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

const StyledBG = styled.div`
    width: 100%;
    height: 500px;
    background-image: ${({ src }) => `url(${src})`};
    background-size: cover;
`;

const StyledWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    background-color: rgba(64, 4, 54, 0.3);
`;
const StyledHeroText = styled.div`
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;

    max-width: 560px;

    @media screen and (max-width: 600px) {
        max-width: unset;
    }

    p {
        font-weight: 700;
        font-size: 20px;
        margin-bottom: 28px;
    }

    h1 {
        border-radius: 8px;
        font-size: 64px;
        font-weight: 700 !important;
        line-height: 45px;
        ${animate};
        opacity: 1;
        animation-delay: 0.2s;
        line-height: 64px;
        /* text-transform: capitalize; */

        @media screen and (max-width: 56.25em) {
            font-size: 48px;
            line-height: 50px;
        }
    }

    span {
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
    }
`;

const StyledButtons = styled.div`
    display: flex;

    @media screen and (max-width: 511px) {
        flex-direction: column;
    }

    & > :first-child {
        margin-right: 16px;
        @media screen and (max-width: 511px) {
            margin-right: 0;
            margin-bottom: 48px;
        }
    }
`;

export { StyledWrapper, StyledHeroText, StyledBG, StyledButtons };
