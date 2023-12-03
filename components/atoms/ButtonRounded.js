import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/Button';

const ButtonRounded = withStyles({
    root: {
        borderRadius: '8px',
        height: ({ height }) => height || '40px',
    },
    textPrimary: {
        color: '#4E40EF',
        '&:hover': {
            backgroundColor: '#F5F2FF',
        },
    },
    textSecondary: {
        color: '#787F88',
        '&:hover': {
            backgroundColor: '#F5F6F7',
        },
    },
    contained: {
        boxShadow: 'none',
    },
    containedPrimary: {
        color: '#fff',
        backgroundColor: '#4E40EF',
        '&:hover': {
            backgroundColor: '#3023C8',
        },

        '&:disabled': {
            color: '#fff',
            backgroundColor: '#9CA0FF',
        },
    },
    containedSecondary: {
        color: '#232629',
        backgroundColor: '#F5F6F7',
        '&:hover': {
            backgroundColor: '#E6E9EC',
        },
        '& .MuiButton-startIcon': {
            color: '#787F88',
        },

        '&:disabled': {
            color: '#787F88',
            backgroundColor: '#F5F6F7',
        },
    },
    label: {
        textTransform: 'none !important',
    },
})(ButtonBase);

export { ButtonRounded };
