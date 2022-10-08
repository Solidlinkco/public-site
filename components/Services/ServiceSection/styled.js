import styled from 'styled-components';

const StyledWrapper = styled.div`
    margin-bottom: 54px;
    padding: 80px 0 40px 0;
`;
const StyledCardWrapper = styled.div`
    position: relative;
    display: flex;
    margin: 32px 0;
    flex-flow: row wrap;

    justify-content: center;

    @media screen and (max-width: 60.25em) {
        justify-content: flex-start;
    }
`;

export { StyledWrapper, StyledCardWrapper };
