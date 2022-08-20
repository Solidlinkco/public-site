import styled from 'styled-components';

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
            border-radius: 12px;
        }
    }
    .texts {
        margin-top: 16px;
    }
    .read-more {
        margin-top: 18px;
        a {
            color: #400436;
            transition: all 0.3s ease-out;
            &:hover {
                opacity: 0.7;
            }
        }
    }
`;

export { StyledCard };
