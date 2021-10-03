import styled from 'styled-components';

const StyledWrapper = styled.div`
    .blog-page-banner {
        height: 300px;

        background-image: ${({ url }) => `url(${url})`};
        background-position: top top;
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;

        & > div {
            background-color: rgba(64, 4, 54, 0.4);
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

export { StyledWrapper };
