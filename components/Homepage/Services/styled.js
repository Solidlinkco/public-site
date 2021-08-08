import styled from 'styled-components';

const StyledWrapper = styled.div`
    margin-bottom: 54px;
    padding: 80px 0;
`;
const StyledCardWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    margin: 32px 0;
    height: 350px;
    flex-flow: row nowrap;

    @media (max-width: 600px) {
        width: 296px;
    }
`;

export { StyledWrapper, StyledCardWrapper };
