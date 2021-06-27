import styled from "styled-components";

const StyledWrapper = styled.div`
    padding: 20px 0 100px 0;
    .videos-list {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        & > :not(:last-child) {
            margin-right: 16px;
        }
    }
`;

const StyledBackdropWrapper = styled.div`
    .image-button {
        width: 300px;
        height: 200px;
        overflow: hidden;
        border-radius: 8px;
        position: relative;
        margin-bottom: 12px;

        img {
            width: 300px;
            height: 200px;
            object-fit: cover;
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
                    font-size: 43px;
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
        font-size: 14px;
        max-width: 300px;
        text-align: center;
    }
`;

export { StyledWrapper, StyledBackdropWrapper };
