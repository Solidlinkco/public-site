import styled from 'styled-components';

export const StyledBrochureModal = styled.div`
    width: 100%;
    max-width: 700px;

    background-color: #f49d2a;
    border: 2px solid #400436;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99999;
    border-radius: 6px;

    padding: 10px;
`;
export const StyledBackdrop = styled.div`
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;

    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
`;

export const StyledCloseButton = styled.button`
    background-color: #400436;
    color: #fff;
    border: none;
    outline: none;
    width: 40px;
    height: 40px;
    border-radius: 4px;
    font-size: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    cursor: pointer;

    span {
        transform: translateY(-2px);
    }
`;

export const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledBrochureContainer = styled.div`
    display: flex;
    margin-top: 52px;
`;
export const StyledBrochureCard = styled.a`
    flex: 1;
    height: 150px;
    border: 2px solid #400436;
    border-radius: 4px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    cursor: pointer;

    &:not(:last-child) {
        margin-right: 10px;
    }

    p {
        font-size: 24px;
        font-weight: 600;
        margin-top: auto;
    }
`;
