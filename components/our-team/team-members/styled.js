import styled from 'styled-components';

export const StyledWrapper = styled.div`
    padding-bottom: 40px;
`;

export const StyleTeamMember = styled.div`
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    border-radius: 10px;
    transition: all 0.3s ease-out;
    height: 300px;
    width: 300px;
    background-image: ${({ img }) => `url(${img})`};
    background-size: cover;
    background-position: center;

    & div {
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 10px;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.4);

        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease-out;
        padding: 10px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        p {
            color: #fff;
            text-align: center;

            font-size: 18px;

            &.team-position {
                font-size: 12px;
                font-weight: 600;
            }

            &.team-name {
                font-size: 18px;
                font-weight: 600;
            }

            &.team-bio {
                margin-top: 10px;
                font-size: 14px;
                font-weight: normal;
            }
        }
    }

    &:hover {
        img {
            transform: scale(1.1);
        }
        & div {
            opacity: 1;
            visibility: visible;
        }
    }
`;
