import styled, { keyframes, css } from "styled-components";

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

const StyledWrapper = styled.div`
    width: 100%;
    height: 500px;
    background-image: ${({ src }) => `url(${src})`};
    background-size: cover;
    position: relative;
`;
const StyledHeroText = styled.div`
    color: #fff;
    position: absolute;
    top: 50%;
    right: 40px;
    transform: translateY(-50%);
    padding: 30px;
    display: flex;
    flex-direction: column;

    h1 {
        background-color: rgb(0, 0, 139, 0.4);
        padding: 20px;
        max-width: 500px;
        border-radius: 8px;
        font-size: 40px;
        font-weight: bold !important;
        line-height: 45px;
        ${animate};
        transform: translateY(0);
        opacity: 1;
        animation-delay: 0.2s;
    }

    button {
        background-color: #1a1546;
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
        font-size: 14px;
        &:hover {
            background-color: #383171;
        }
    }
`;
export { StyledWrapper, StyledHeroText };
