import styled from 'styled-components';

export const StyledWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 40px 0 80px 0;
    color: #f49d2a;
    flex-flow: row wrap;
    gap: 60px;

    & div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 200px; 
        text-align: center;

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
