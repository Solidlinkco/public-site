import styled from 'styled-components';

export const StyledDropDownContainer = styled.div`
    transition: all 0.3s ease-out;
    cursor: pointer;

    & p {
        color: #400436;
        margin-bottom: 1rem;
        transform: translateY(1.5px);
        span {
            svg {
                transition: all 0.3s ease-out;

                transform: translate(4px, 7px);
            }
        }
    }
`;

export const StyledDropDownSubItems = styled.div`
    transition: all 0.3s ease-out;
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
    position: ${({ $isOpen }) => ($isOpen ? 'relative' : 'absolute')};
    margin-left: 24px;

    & > div:first-child {
        margin-top: 24px;
    }
    & > div:not(:last-child) {
        margin-bottom: 24px;
    }
`;
