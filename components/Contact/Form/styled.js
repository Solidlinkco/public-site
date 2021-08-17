import styled from 'styled-components';

const StyledFormWrapper = styled.div`
    margin-bottom: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    @media screen and (min-width: 50em) {
        flex-direction: column;
    }
    form {
        flex: 1;
        margin-right: 48px;
        @media screen and (min-width: 50em) {
            width: 100%;
            margin-right: 0;
            margin-bottom: 60px;
        }
    }
    iframe {
        flex: 1;
        height: 460px;
        margin-top: 24px;
        @media screen and (min-width: 50em) {
            width: 100%;
            height: 600px;
        }
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
        color: #400436;
    }

    input {
        height: 46px;
        border-radius: 6px;
        outline: none;
        border: 1px solid rgba(244, 157, 42, 0.5);
        padding: 0 8px;
        width: 100%;
        transition: all 0.3s ease-out;

        &:focus {
            border-color: #f49d2a;
        }
    }
    textarea {
        min-height: 70px;
        border-radius: 6px;
        outline: none;
        border: 1px solid rgba(244, 157, 42, 0.5);
        padding: 8px;
        width: 100%;
        font-family: inherit;
        transition: all 0.3s ease-out;

        &:focus {
            border-color: #f49d2a;
        }
    }

    p {
        font-size: 12px;
        color: red;
    }
`;

export { StyledInputBox, StyledInputWrapper, StyledFormWrapper };
