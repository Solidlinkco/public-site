import React from 'react';
import { withStyles, LinearProgress } from '@material-ui/core';
import { string } from 'prop-types';
import THEME from '../../constants/theme';

const linearProgress = (barBackground) =>
  withStyles({
    root: {
      width: '100%',
      height: 2,
      backgroundColor: THEME.greyColors.grey4,
    },
    bar: {
      borderRadius: 20,
      backgroundColor: barBackground,
    },
  })(LinearProgress);

const BorderLinearProgress = ({ backgroundColor, ...props }) => {
  const Progress = linearProgress(backgroundColor);
  return <Progress {...props} />;
};

BorderLinearProgress.propTypes = {
  backgroundColor: string,
};
BorderLinearProgress.defaultProps = {
  backgroundColor: 'THEME.secondaryColors.blue',
};

export default BorderLinearProgress;
