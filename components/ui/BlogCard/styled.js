import styled from "styled-components";

const StyledCard = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    overflow: hidden;
    flex-wrap: nowrap;
    margin-right: 40px;
    width: 100%;

    .image {
        width: 100%;
        img {
            width: 100%;
        }
    }
    .texts {
        margin-top: 16px;
    }
    .read-more {
        margin-top: 18px;
    }
`;

export { StyledCard };
