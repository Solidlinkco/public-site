import styled from "styled-components";

const StyledWrapper = styled.div`
    width: 100%;
    overflow: hidden;
    & > * {
        position: relative;
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;

        div {
            flex: 1;
            flex-wrap: nowrap;

            min-width: 120px;
            margin-right: 70px;

            & img {
                width: 100%;
            }
        }
    }
`;

export { StyledWrapper };
