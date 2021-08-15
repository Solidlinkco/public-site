import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: #1a1546;
    border: none;
    padding: 16px 20px;
    outline: none;
    border-radius: 8px;
    color: #fff;
    animation-delay: 0.5s;
    transform: translateY(0);
    opacity: 1;
    cursor: pointer;
    transition: all 0.3s ease-out;
    font-size: 14px;
    width: 220px;
    align-self: center;
    height: ${({ height }) => height || 'auto'};

    &:hover {
        background-color: #383171;
    }
`;

export default StyledButton;
