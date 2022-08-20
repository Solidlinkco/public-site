import styled from 'styled-components';

export const StyledWhatsApp = styled.a`
    background-color: #25d366;
    width: 50px;
    height: 50px;
    border: none;
    padding: 8px;
    margin: 0;
    border-radius: 8px;

    div {
        position: relative;
        transform: translate(1px, -3px);
    }

    position: fixed;
    z-index: 999999999;
    bottom: calc(env(safe-area-inset-bottom) + 10px);
    right: 10px;

    cursor: pointer;
`;
