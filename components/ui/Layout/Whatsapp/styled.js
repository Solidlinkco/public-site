import styled from 'styled-components';

export const StyledWhatsApp = styled.a`
    background-color: #25d366;
    width: 50px;
    height: 50px;
    border: none;
    padding: 8px;
    margin: 0;
    border-radius: 8px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    z-index: 999999999;
    top: calc(100vh - 70px);
    right: 20px;

    cursor: pointer;
`;
