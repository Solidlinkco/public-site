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
            background-color: rgba(64, 4, 54, 0.2);
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

    & > :not(:last-child) {
        margin-bottom: 40px;
    }
`;
const StyledSearchWrapper = styled.div`
    position: relative;
    margin: ${({ $margin }) => $margin || '40px 0 20px 0'};

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
    border: 1px solid rgba(64, 4, 54, 0.2);
    border-radius: 6px;
    &:focus {
        border-color: rgba(64, 4, 54, 1);

        & ~ svg {
            path {
                fill: rgba(64, 4, 54, 1);
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
