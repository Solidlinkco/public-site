import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import THEME from '../../constants/theme';

const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    borderRadius: 6,
    width: 24,
    height: 24,
    backgroundColor: THEME.greyColors.grey8,
    'input:hover ~ &': {
      backgroundColor: THEME.greyColors.grey2,
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: THEME.greyColors.grey3,
    },
    '&:before': {
      display: 'block',
      position: 'absolute',
      top: 15,
      left: 14,
      width: 13,
      height: 11,
      backgroundRepeat: 'no-repeat',
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 13 11'%3E%3Cpath" +
        " d='M1 5.33329L5 8.99996L12 1.66663' stroke='white' stroke-width='2' stroke-miterlimit='10'/%3E%3C/svg%3E\")",
      content: '""',
    },
  },
  checkedIcon: {
    backgroundColor: THEME.primaryColors.main,
    '&:before': {
      display: 'block',
      position: 'absolute',
      top: 15,
      left: 14,
      width: 13,
      height: 11,
      backgroundRepeat: 'no-repeat',
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 13 11'%3E%3Cpath" +
        " d='M1 5.33329L5 8.99996L12 1.66663' stroke='white' stroke-width='2' stroke-miterlimit='10'/%3E%3C/svg%3E\")",
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: THEME.primaryColors.main,
    },
  },
});

const CustomCheckbox = (props) => {
  const classes = useStyles();

  return (
    <Checkbox
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      inputProps={{ 'aria-label': 'decorative checkbox' }}
      {...props}
    />
  );
};

export default CustomCheckbox;
