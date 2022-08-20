import React, { useCallback } from 'react';
import { string, shape, arrayOf, oneOfType, number, func, bool } from 'prop-types';
import { Select, withStyles, FormControl, MenuItem, InputLabel } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import isEmpty from 'lodash/isEmpty';

import { useToggle } from 'react-use';
import THEME from '../../constants/theme';
import { P14 } from './P14';

const CustomSelect = withStyles({
  root: {
    width: ({ width }) => width || 'auto',
    fontSize: ({ fontSize }) => fontSize || '14px',
    padding: ({ size }) => {
      if (size === 'smaller') {
        return '12px 16px';
      }
      return '8px 16px';
    },
    height: 32,
    marginRight: 0,
    display: 'flex',
    alignItems: 'center',
    border: 'none',
  },
  selectMenu: {
    border: 'none',
  },
})(Select);

const StyledFormControl = withStyles({
  root: {
    fontFamily: 'inherit',
    minWidth: ({ width }) => (width ? 'unset' : '100%'),
    margin: ({ margin }) => margin || '12px 0',
    maxWidth: '100%',
    '& .MuiSelect-root > div': {
      overflow: 'hidden',
    },
    '& .MuiInputBase-input': {
      fontSize: ({ fontSize }) => fontSize || '14px',
    },
    '& .MuiInputBase-root': {
      backgroundColor: ({ backgroundColor }) => backgroundColor || 'white',
      color: THEME.primaryColors.black,
      fontWeight: ({ withoutBorder }) => (withoutBorder ? 'bold' : 'normal'),
      '&:hover fieldset': {
        borderColor: THEME.primaryColors.blue,
      },
      '& fieldset': {
        border: ({ withoutBorder }) => (!withoutBorder ? `0.5px solid ${THEME.greyColors.grey3}` : 'none'),
        borderColor: THEME.greyColors.grey3,
        borderRadius: '8px !important',
      },
      '&.Mui-focused fieldset': {
        borderColor: THEME.primaryColors.blue,
        borderWidth: 1,
      },
      '& .MuiSelect-root': {
        padding: ({ padding }) => padding || '4px 30px 4px 12px',
        borderRadius: '32px',
        width: '100%',
      },
      '& .MuiSelect-select:focus': {
        background: 'transparent',
      },
    },
    '& label': {
      color: THEME.primaryColors.black,
      fontWeight: 'normal',
      fontSize: ({ size }) => {
        if (size === 'smaller') {
          return '14px';
        }
        return '18px';
      },
    },
    '& label.Mui-focused': {
      color: THEME.primaryColors.black,
    },
    '& .MuiInputBase-root fieldset': {
      borderRadius: '8px',
    },
    '& .MuiInputLabel-outlined': {
      '&.MuiInputLabel-shrink': {
        transform: 'translate(14px, 20px) scale(1)',
      },
      '&.MuiFormLabel-filled': {
        transform: 'translate(14px, -7px) scale(0.8)',
        fontWeight: 500,
        color: THEME.primaryColors.black,
        padding: '0 4px!important',
        marginLeft: '-2px',
        background: THEME.primaryColors.white,
        transition: '0.3s background',
      },
    },
  },
})(FormControl);

const StyledSelect = ({ hideLink, id, name, options, value, onChange, label, open, onClose, ...restProps }) => {
  const [isOpen, toggleOpen] = useToggle(open || false);
  const handleOnChange = useCallback(
    (e) =>
      e.target.value !== 'addCard' ? onChange(e) : options.find((item) => item.value === 'addCard').clickHandler(),
    [options, onChange]
  );
  const handleClose = (e) => {
    e.stopPropagation();
    onClose(e);
    toggleOpen();
  };
  return (
    <StyledFormControl variant="outlined" {...restProps}>
      {label && (
        <InputLabel id={`${name}-label`} shrink>
          {label}
        </InputLabel>
      )}
      <CustomSelect
        open={isOpen}
        onOpen={toggleOpen}
        onClose={handleClose}
        labelId={`${name}-label`}
        value={value}
        id={name}
        name={name}
        MenuProps={{
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
          },
          getContentAnchorEl: null,
        }}
        IconComponent={ExpandMoreIcon}
        inputProps={{ name, id, onChange: handleOnChange, value }}
        {...restProps}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value} disabled={option.disabled}>
            {option.icon || null}
            {option.text.text ? option.text.text : '0'}
            {!hideLink && option.connectedIds && (
              <P14 margin="0 0 0 auto" color={THEME.greyColors.grey2}>
                {!isEmpty(option.connectedIds.find((item) => item.id === option.value)) ? 'Linked' : 'Not linked'}
              </P14>
            )}
          </MenuItem>
        ))}
      </CustomSelect>
    </StyledFormControl>
  );
};

StyledSelect.propTypes = {
  name: string.isRequired,
  onChange: func.isRequired,
  value: oneOfType([number, string]).isRequired,
  options: arrayOf(shape({})).isRequired,
  id: string,
  label: string,
  hideLink: bool,
  open: bool,
  onClose: func,
};
StyledSelect.defaultProps = {
  id: null,
  label: null,
  hideLink: false,
  open: false,
  onClose: () => null,
};

export default StyledSelect;
