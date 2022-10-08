import styled from 'styled-components';

const StyledCard = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: row wrap;
    overflow: hidden;
    flex-wrap: nowrap;
    width: 100%;
    min-width: 563.5px;
    max-height: 250px;
    background-color: #fff;
    border-radius: 12px;
    padding: 24px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.02);
    border: 1px solid #ececec;
    box-sizing: border-box;
    transition: all 0.35s;
    cursor: pointer;
    position: relative;

    :hover {
        transform: translateY(-4px);
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.07);
    }
    .image {
        display: block;
        margin-right: 16px;
        flex-shrink: 0;
        img {
            width: 220px;
            height: calc(226px - 24px);
            object-fit: cover;
            border-radius: 12px;
        }
    }
    .texts {
        flex: 1;
    }
    .read-more {
        margin-top: 18px;
    }

    @media screen and (max-width: 37.5em) {
        min-width: unset;
        max-height: unset;

        flex-direction: column;
        height: auto;
        overflow: visible;

        .image {
            width: 100%;

            display: block;
            margin-right: 0;
            margin-bottom: 16px;
            img {
                width: 100%;
                height: calc(226px - 24px);
                object-fit: cover;
                border-radius: 12px;
            }
        }
    }
`;

export { StyledCard };
