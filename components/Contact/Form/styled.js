import styled from 'styled-components';

const StyledFormWrapper = styled.div`
    margin-bottom: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    form {
        flex: 1;
        margin-right: 48px;
    }
    iframe {
        flex: 1;
        height: 460px;
        margin-top: 24px;
    }
`;

const StyledInputWrapper = styled.div`
    /* max-width: 300px; */
    & > :not(:last-child) {
        margin-bottom: 12px;
    }

    button {
        width: 100%;
    }
`;

const StyledInputBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    label {
        font-size: 14px;
        font-weight: 600;
    }

    input {
        height: 36px;
        border-radius: 6px;
        outline: none;
        border: 1px solid #000;
        padding: 0 8px;
        width: 100%;

        &:focus {
            border-color: green;
        }
    }
    textarea {
        min-height: 70px;
        border-radius: 6px;
        outline: none;
        border: 1px solid #000;
        padding: 8px;
        width: 100%;
        font-family: inherit;
    }

    p {
        font-size: 12px;
        color: red;
    }
`;

export { StyledInputBox, StyledInputWrapper, StyledFormWrapper };
