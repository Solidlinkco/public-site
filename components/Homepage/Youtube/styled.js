import styled from 'styled-components';

const StyledYoutubeWrapper = styled.div`
    width: 100%;
    display: flex;
    background-color: rgba(64, 4, 54, 0) !important;
    padding: 40px 0;

    & > div {
        display: block;
        width: 100%;
        flex: 1;
        padding: 16px;

        height: 415px;
        overflow-y: auto;
        @media screen and (max-width: 31.25em) {
            overflow-y: visible;
        }
    }

    @media screen and (max-width: 56.25em) {
        flex-direction: column;
    }
`;

const StyledVideoList = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-flow: column wrap;

    & > :not(:last-child) {
        margin-right: 12px;
    }
`;

const StyledBackdropWrapper = styled.div`
    margin-bottom: ${({ $isLarge }) => ($isLarge ? '0' : '32px')};

    display: flex;
    align-items: center;
    &:last-child {
        margin-bottom: 0;
    }
    @media screen and (max-width: 31.25em) {
        align-items: flex-start;
        flex-direction: column;
    }

    .image-button {
        width: ${({ $isLarge }) => ($isLarge ? '100%' : '240px')};
        height: ${({ $isLarge }) => ($isLarge ? `380px` : '120px')};
        overflow: hidden;
        border-radius: 8px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;

        @media screen and (max-width: 31.25em) {
            width: 100% !important;
            height: auto;
        }

        img {
            display: block;
            width: 100%;
        }

        button {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border: none;
            outline: none;
            background-color: rgba(255, 255, 255, 0);
            width: 100%;
            height: 100%;
            cursor: pointer;

            div {
                svg {
                    font-size: ${({ $isLarge }) => ($isLarge ? '76px' : '43px')};
                    color: #fff;
                    transform: scale(1);
                    transition: all 0.35s;
                }
            }

            &:hover {
                div {
                    svg {
                        transform: scale(1.4);
                    }
                }
            }
        }
    }

    .title {
        display: flex;
        flex-direction: column;
        p {
            color: rgba(64, 4, 54, 1);
            font-size: 16px;
            font-weight: 600;
            display: inline-block;
            margin-left: 18px;
        }

        & .title_date {
            color: rgba(64, 4, 54, 0.5);
            font-size: 12px;
            font-weight: 600;
            margin-top: 4px;
            @media screen and (max-width: 31.25em) {
                margin-top: 2px;
            }
        }
    }
`;

export { StyledYoutubeWrapper, StyledBackdropWrapper, StyledVideoList };
