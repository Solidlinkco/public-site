import styled from 'styled-components';

const StyledWrapper = styled.div`
    padding: 80px 0 90px 0;
`;

const StyledCountries = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 32px;
    flex-flow: row wrap;
`;
const StyledCountriesItem = styled.div`
    flex: 0 0 256px;
    transition: all 0.3s ease-out;
    border-radius: 10px;
    overflow: hidden;
    background-color: #fff;
    transition: all 0.3s ease-out;
    padding: 16px;
    height: 100% !important;

    img {
        width: 100%;
        border-radius: 10px;
        overflow: hidden;
    }

    p {
        margin-top: 16px;
        font-weight: 600;
        font-size: 18px;
        border-top: 1px solid rgb(244, 157, 42, 0.4);
        padding-top: 16px;
    }
`;

export { StyledWrapper, StyledCountries, StyledCountriesItem };
