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
    right: 190px;
    transform: translateY(-50%);
    padding: 30px;
    display: flex;
    flex-direction: column;

    h1 {
        background-color: #f49d2a;
        padding: 20px;
        max-width: 690px;
        border-radius: 8px;
        font-size: 40px;
        font-weight: bold !important;
        line-height: 45px;
        ${animate};
        transform: translateY(0);
        opacity: 1;
        animation-delay: 0.2s;
        text-align: center;
        /* text-transform: capitalize; */
        font-weight: normal !important;
    }

    @media screen and (max-width: 56.25em) {
        right: 0;
        left: 0;
        padding: 16px;

        button {
            width: 100% !important;
        }
    }

    button {
        background-color: #73d97a;
        border: none;
        padding: 16px 20px;
        outline: none;
        border-radius: 8px;
        color: #fff;
        ${animate};
        animation-delay: 0.5s;
        transform: translateY(0);
        opacity: 1;
        cursor: pointer;
        transition: all 0.3s ease-out;
        font-size: 22px;
        width: 320px;
        font-weight: 600;
        align-self: center;

        &:hover {
            background-color: #383171;
        }
    }
`;

export { StyledWrapper, StyledHeroText, StyledBG };
