import PropTypes from 'prop-types';
import React from 'react';
import { Box, withStyles } from '@material-ui/core';
import EmptyIcon from '../../assets/icons/EmptyStates/PaymentIntents';
import THEME from '../../constants/theme';

const StyledBox = withStyles({
  root: {
    '& a': {
      color: `${THEME.primaryColors.blue}`,
    },
  },
})(Box);

const StyledSVGBox = withStyles({
  root: {
    transform: 'translate(-14px, -20px) scale(1.4) ',
  },
})(Box);

const EmptyState = ({ children, height, image }) => {
  return (
    <Box
      width="100%"
      height={height}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
      top="0"
      left="0"
    >
      {image && <Box maxHeight="200px" component="img" src={image} mb="18px" />}
      {!image && (
        <StyledSVGBox>
          <EmptyIcon />
        </StyledSVGBox>
      )}

      <StyledBox maxWidth="340px" textAlign="center" color="#787F88" lineHeight="2">
        {children}
      </StyledBox>
    </Box>
  );
};

EmptyState.propTypes = {
  height: PropTypes.string,
  image: PropTypes.string,
};

EmptyState.defaultProps = {
  height: 'calc(100vh - 182px)',
  image: null,
};

export default EmptyState;
