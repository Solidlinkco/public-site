import React from 'react';
import InfoIcon from '@material-ui/icons/Info';
import { Tooltip, makeStyles } from '@material-ui/core';
import { string } from 'prop-types';
import QuestionFilledIcon from '../../assets/img/QuestionFilledIcon.svg';
import { StyledImage } from './StyledImage';
import { MaterialIconStyler } from './MaterialIconStyler';
import { FlexContainer } from './FlexContainer';

const useStyles = makeStyles(() => ({
  arrow: {
    color: '#1a0747',
  },
  tooltip: {
    background: '#1a0747',
    color: '#fff',
    padding: '20px',
    fontSize: '16px',
    fontWeight: 400,
  },
}));

const CustomInfoPopover = ({ text, size, icon, ...restProps }) => {
  const classes = useStyles();

  return (
    <FlexContainer {...restProps}>
      {icon === 'info' && (
        <Tooltip title={text} placement="right" arrow classes={classes}>
          <MaterialIconStyler icon={InfoIcon} fontSize={`${size}px`} />
        </Tooltip>
      )}
      {icon === 'question' && (
        <Tooltip title={text} placement="right" arrow classes={classes}>
          <StyledImage margin="0 0 0 16px" width="16px" opacity="0.3" src={QuestionFilledIcon} alt="" />
        </Tooltip>
      )}
    </FlexContainer>
  );
};

CustomInfoPopover.propTypes = {
  text: string.isRequired,
  size: string,
  icon: string,
};

CustomInfoPopover.defaultProps = {
  size: 'normal',
  icon: 'info',
};

export default CustomInfoPopover;
