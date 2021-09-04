import styled from 'styled-components';

const StyledWrapper = styled.div`
    padding: 20px 0 100px 0;
    .videos-list {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-flow: row wrap;

        & > :not(:last-child) {
            margin-right: 12px;
        }
    }
`;

const StyledBackdropWrapper = styled.div`
    margin-bottom: 32px;

    .image-button {
        width: 296px;
        height: 200px;
        overflow: hidden;
        border-radius: 8px;
        position: relative;
        display: block;
        img {
            display: block;
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
        max-width: 250px;
        text-align: center;
        margin: 0 auto;
    }
`;

export { StyledWrapper, StyledBackdropWrapper };
