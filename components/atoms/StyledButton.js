import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: ${({ bgcolor }) => bgcolor || '#73d97a'};
    border: none;
    outline: none;
    border-radius: 10px;
    color: #fff;
    opacity: 1;
    cursor: pointer;
    align-self: center;
    height: ${({ height }) => height || 'auto'};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    font-weight: 600;
    font-size: 16px;
    transition: all 0.3s ease-out;
    transform: translateY(0);
    position: relative;
    width: ${({ width }) => width || 'auto'};
    padding: ${({ padding }) => padding || '16px 24px'};

    &:hover {
        background-color: #56b55b;
        transform: translateY(-4px);
        box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.15);
    }
`;

export default StyledButton;
