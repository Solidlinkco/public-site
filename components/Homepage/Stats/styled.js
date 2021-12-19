import styled from 'styled-components';

export const StyledWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 40px 0 80px 0;
    color: #f49d2a;

    & div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-width: 250px;
        svg {
            height: 50px;
            margin-bottom: 30px;
        }
        i {
            font-size: 60px;
            font-style: unset;
            padding-bottom: 20px;
            position: relative;
            color: #400436;
            font-weight: 600;
            &::after {
                content: '+';
                position: absolute;
                display: block;
                right: -18px;
                top: -12px;
                font-size: 30px;
                font-weight: 600;
            }
        }
    }
`;
