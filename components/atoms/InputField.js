import { TextField, withStyles } from '@material-ui/core';
import THEME from '../../constants/theme';

const InputField = withStyles({
    root: {
        borderRadius: '6px',
        width: '100%',
        margin: ({ margin }) => margin || '4px 0 13px',
        '& label': {
            color: THEME.greyColors.grey1,
            fontWeight: 'normal',
            fontSize: ({ size }) => (size === 'small' ? '14' : '16'),
        },
        '& label.Mui-focused': {
            color: `${THEME.primaryColors.blue}!important`,
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: THEME.primaryColors.black,
        },
        '& .MuiOutlinedInput-input': {
            padding: ({ size, padding }) => {
                if (padding) {
                    return padding;
                }
                if (size === 'smaller') {
                    return '8px 16px 11px';
                }
                return '9px 16px 11px';
            },
            paddingLeft: ({ innerPaddingLeft }) => innerPaddingLeft || '16px',
            minHeight: ({ minheight }) => minheight || 'none',
            fontWeight: ({ fontWeight }) => fontWeight || 'normal',
            fontSize: ({ size, fontSize }) => {
                if (fontSize) {
                    return fontSize;
                }
                if (size === 'smaller') {
                    return '14px';
                }
                return '18px';
            },
        },
        '& .MuiInputLabel-root': {
            fontSize: ({ size }) => {
                if (size === 'smaller') {
                    return '14px';
                }
                return '18px';
            },
        },
        '& .MuiOutlinedInput-inputMultiline': {
            padding: '0',
        },
        '& .MuiInputBase-input': {
            height: 28,
            color: 'black',
            position: 'realtive',
            zIndex: 1,
        },
        '& .MuiInputLabel-outlined': {
            transform: ({ size }) => {
                if (size === 'smaller') {
                    return 'translate(16px, 17px) scale(1)';
                }
                return 'translate(16px, 20px) scale(1)';
            },
            '&.MuiInputLabel-shrink.MuiFormLabel-filled': {
                transform: 'translate(14px, -7px) scale(0.8)',
                fontWeight: 500,
                padding: '0 4px!important',
                marginLeft: '-2px',
                color: THEME.primaryColors.black,
            },
            '&.MuiInputLabel-shrink.Mui-focused': {
                transform: 'translate(14px, -7px) scale(0.8)',
                fontWeight: 500,
                background: 'white',
                padding: '0 4px!important',
                marginLeft: '-2px',
                borderColor: THEME.primaryColors.blue,
            },
        },
        '& .MuiInputAdornment-root': {
            zIndex: 999,
        },
        //
        // hover
        //
        '& .MuiOutlinedInput-root': {
            borderRadius: '6px',
            '&:hover fieldset': {
                borderColor: '#ebecee',
                background: '#ebecee',
            },
            '& fieldset': {
                //
                // default
                //
                backgroundColor: '#F5F6F7',
                borderColor: '#F5F6F7',
                borderWidth: ({ noborder }) => (noborder ? 0 : 1),
                borderRadius: ({ borderRadius }) => `${borderRadius || '8px'} !important`,
            },
            //
            // focus
            //
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: THEME.primaryColors.primary,
                borderWidth: ({ noborder }) => (noborder ? 0 : 1),
            },
            '&.Mui-focused fieldset': {
                // borderColor: THEME.primaryColors.primary,
                borderColor: 'orange',
                backgroundColor: 'white',
                boxShadow: '0 0 0 2px rgba(156,160,255,0.3)',
                borderWidth: ({ noborder }) => (noborder ? 0 : 1),
            },
        },
        '& .MuiOutlinedInput-root fieldset': {
            borderRadius: 8,
        },
        borderWidth: ({ noborder }) => (noborder ? 0 : 1),
    },
})(TextField);

export default InputField;
