import React from 'react';
import styled from 'styled-components';
import { TextField, InputAdornment } from '@material-ui/core';
import { arrayOf, func, node, oneOfType, string } from 'prop-types';
import THEME from '../../constants/theme';

const FieldWrapper = styled(TextField)`
  color: ${({ color }) => color || THEME.greyColors.grey2};
  > div {
    &:after,
    &:before {
      display: none;
    }
  }
`;

const InputWithIcon = ({ onChange, label, placeholder, position, children, ...restProps }) => (
  <FieldWrapper
    {...restProps}
    label={label}
    placeholder={placeholder}
    onChange={onChange}
    InputProps={{
      startAdornment: <InputAdornment position={position}>{children}</InputAdornment>,
    }}
  />
);

InputWithIcon.propTypes = {
  children: oneOfType([node, arrayOf(node)]).isRequired,
  onChange: func.isRequired,
  label: string,
  placeholder: string,
  position: string,
};

InputWithIcon.defaultProps = {
  label: '',
  placeholder: '',
  position: 'start',
};

export default InputWithIcon;
export { InputWithIcon };
