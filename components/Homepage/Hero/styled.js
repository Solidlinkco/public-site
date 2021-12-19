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
    background-color: rgba(64, 4, 54, 0.2);
`;
const StyledHeroText = styled.div`
    color: #fff;
    position: absolute;
    top: 50%;
    left: 60px;
    transform: translateY(-50%);
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    h1 {
        max-width: 560px;
        border-radius: 8px;
        font-size: 60px;
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

    @media screen and (max-width: 56.25em) {
        left: 16px;
    }

    button {
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

        &:hover {
            background-color: #56b55b;
        }
    }
`;

export { StyledWrapper, StyledHeroText, StyledBG };
