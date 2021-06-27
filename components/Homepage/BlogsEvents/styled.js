import styled from "styled-components";

export const StyledWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 100px 0;

    & > :first-child {
        padding-right: 48px;
    }
    & > :last-child {
        padding-left: 48px;
    }

    & > :not(:last-child) {
        border-right: 1px solid #efefef;
    }

    .blog-card {
    }

    .major-link {
        margin-top: 48px;
    }
`;
