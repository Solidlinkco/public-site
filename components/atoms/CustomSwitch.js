import React from 'react';
import { makeStyles } from '@material-ui/core';
import { string, bool, func } from 'prop-types';

const useStyles = makeStyles(() => ({
  switchWrapper: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 500,
    color: '#232629',
  },
  switch: {
    position: 'relative',
    width: 40,
    height: 24,
    boxSizing: 'border-box',
    borderRadius: 24,
    background: 'rgba(78, 64, 239, 0.05)',
    marginRight: 16,
  },
  thumb: {
    position: 'absolute',
    top: 2,
    left: 2,
    height: 20,
    width: 20,
    borderRadius: '50%',
    background: '#787F88',
    transition: '0.25s',
  },
  thumbChecked: {
    left: 18,
    background: '#4E40EF',
  },
}));

const CustomSwitch = ({ label, checked, onClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.switchWrapper} onClick={() => onClick()}>
      <div className={classes.switch}>
        <div className={`${classes.thumb} ${checked ? classes.thumbChecked : ''}`} />
      </div>
      {label}
    </div>
  );
};

CustomSwitch.propTypes = {
  checked: bool,
  label: string,
  onClick: func,
};

CustomSwitch.defaultProps = {
  label: '',
  checked: false,
  onClick: () => {},
};

export default CustomSwitch;
