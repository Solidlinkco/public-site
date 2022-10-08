import styled from 'styled-components';
import MuiFormControl from '@material-ui/core/FormControl';
import MuiSelect from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export const StyledFilterWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    & > div {
        flex: 1;
    }

    & > .react-select {
        flex: 1;
    }

    & .react-select__control {
        min-height: 54px;
    }
`;
export const StyledInputRequiredStar = styled.span`
    color: #ff0000;
`;

export const Select = styled(MuiSelect)`
    &.MuiInputBase-root {
        box-shadow: none;
        transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
            box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
            color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

        svg {
            path {
            }
        }

        &:hover {
            .MuiOutlinedInput-notchedOutline {
            }
        }

        &.MuiInputBase-adornedStart {
            .MuiSelect-select {
                padding-left: 28px;
            }
        }
    }

    .MuiSelect-root {
        padding-right: 36px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-weight: 500;
        font-size: 16px;
        border: 1px solid #c3cad8;

        svg {
            display: none;
            visibility: hidden;
            opacity: 0;
        }
    }

    &.Mui-focused {
        & .MuiOutlinedInput-notchedOutline {
            border-color: #c3cad8;
        }
    }

    // small input
    &.MuiInputBase-sizeSmall {
        & .MuiSelect-select {
            padding: 12px 16px;
            padding-right: 36px;
        }
    }

    & .uiSelect-nativeInput {
        border-width: 1.5px;
        border: 1px solid #c3cad8;
    }

    .MuiSelect-icon {
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        /* background-color: red; */
        right: 16px;
        transform: translateY(-2px) rotate(0deg);

        &.MuiSelect-iconOpen {
            transform: translateY(-3px) rotate(180deg);
        }
    }
`;

export const SelectAdornmentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
    position: absolute;
    left: ${(props) => props.$left};
    right: ${(props) => props.$right};
`;

/** Menu is rendered in portal and cant be styled with styled-components */
export const MENU_SX = {
    '& .MuiPaper-root': {
        borderRadius: '4px',
        marginTop: '6px',
        backgroundColor: '#fff',
        // boxShadow: `${theme.boxShadow.large}`,
        padding: '0 8px',
        // border: `1px solid ${theme.colors.borderColor}`,
        border: '1px solid #c3cad8',
    },
};

export const StyledMenuItem = styled(MenuItem)`
    &.MuiMenuItem-root {
        border-radius: 4px;
        font-size: 15px;
        padding: 10px 12px;
        font-weight: 500;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &:not(:last-child) {
            margin-bottom: 2px;
        }
        svg {
            transform: translateY(1px) scale(0.8);
            display: none;
            margin-left: 6px;
        }
        &.Mui-focusVisible {
        }
        &:hover,
        &.Mui-selected {
        }
        &.Mui-selected {
            svg {
                display: block;
            }
        }
    }
`;
