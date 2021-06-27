import styled from "styled-components";

export const StyledWrapper = styled.div`
    max-width: 300px;
    width: 100%;
    font-style: italic;
    min-height: 220px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: flex-start;

    .content {
        font-size: 16px;
        position: relative;

        &::before {
            content: "”";
            display: block;
            position: absolute;
            color: rgba(26, 21, 70, 0.4);
            font-size: 120px;
            top: -10px;
            right: -0px;
            position: absolute;
            line-height: 1;
            color: #f4f2f2;
            font-family: sans-serif !important;
            z-index: -1;
        }
    }

    div {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        img {
            width: 30px;
            border-radius: 50%;
            overflow: hidden;
        }

        .facade-separator {
            width: 10px;
            height: 1px;
            background-color: rgba(26, 21, 70, 0.4);
            margin: 0 6px;
        }

        div {
            .author-name {
                font-weight: 600;
                font-style: normal;
                font-size: 14px;
            }
        }
    }
`;
