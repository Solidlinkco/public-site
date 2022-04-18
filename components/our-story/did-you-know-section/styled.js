import styled from 'styled-components';

export const StyledStoryContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    width: 100%;

    & p {
        text-align: center;
        font-size: 18px;
        line-height: 1.7;
        color: #400436;
        &:not(:last-child) {
            margin-bottom: 20px;
        }
    }
`;
export const StyledWrapper = styled.div`
    padding: 40px 0;
`;
