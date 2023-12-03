import styled from 'styled-components';

const StyledWrapper = styled.div`
    padding: 0 0 100px 0;
    .insta-grid {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding: 40px 0;

        img {
            max-width: 240px;
        }
    }
`;

export { StyledWrapper };
