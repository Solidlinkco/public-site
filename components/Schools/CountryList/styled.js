import styled from 'styled-components';

const StyledWrapper = styled.div`
    margin-bottom: 54px;
    padding: 20px 0 40px 0;
`;

const StyledCountries = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 32px;
    flex-flow: row wrap;

    a {
        flex: 0 0 256px;
        transition: all 0.3s ease-out;
        margin-bottom: 32px;

        &:hover div {
            transform: translateY(-4px);
            box-shadow: 0 4px 2px 4px rgba(0, 0, 0, 0.02);
        }
    }
`;
const StyledCountriesItem = styled.div`
    width: 100%;
    border-radius: 6px;
    overflow: hidden;
    background-color: #fff;
    transition: all 0.3s ease-out;

    img {
        width: 100%;
    }

    p {
        padding: 16px;
        font-weight: 600;
        font-size: 18px;
    }
`;

export { StyledWrapper, StyledCountries, StyledCountriesItem };
