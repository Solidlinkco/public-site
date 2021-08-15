import styled from 'styled-components';

const StyledWrapper = styled.div`
    .blog-page-banner {
        height: 300px;

        background-image: url('/assets/img/caleb-woods-RIcMwDLk1wo-unsplash.jpg');
        background-position: center 80%;
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;

        & > div {
            background-color: rgba(0, 0, 0, 0.5);
            width: 100%;
            height: 300px;
            display: flex;
            flex-flow: row wrap;
            justify-content: center;
            align-items: center;

            & > div {
                color: #fff;
                text-align: center;
            }
        }
    }
`;

const StyledBlogsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: flex-start;

    & .blg-page-card {
        max-width: 460px;
        margin-right: 0 !important;
        margin-bottom: 80px !important;

        &:nth-child(2n + 1) {
            margin-right: 40px !important;
        }
    }
`;
const StyledSearchWrapper = styled.div`
    position: relative;
    margin: 40px 0 20px 0;

    svg {
        position: absolute;
        top: 50%;
        left: 16px;
        transform: translateY(-50%);
    }
`;
const StyledSearch = styled.input`
    position: relative;
    width: 100%;
    padding: 14px 0 14px 52px;
    border-radius: 0;
    border-style: none;
    outline: none;
    font-size: 14px;
    line-height: 24px;
    transition: 0.2s;
    color: black;
    border: 1px solid rgb(0, 0, 139, 0.2);
    border-radius: 6px;
    &:focus {
        border-color: #1a1546;

        & ~ svg {
            path {
                fill: #1a1546;
            }
        }
    }

    &::placeholder {
        color: grey;
        font-size: 14px;
        line-height: 24px;
    }
`;
export { StyledWrapper, StyledBlogsWrapper, StyledSearch, StyledSearchWrapper };