import PropTypes from 'prop-types';
import React from 'react';
import Box from '@material-ui/core/Box';
import withStyles from '@material-ui/core/styles/withStyles';
import { useTranslation } from 'react-i18next';

import { P14B } from './P14B';
import { P14 } from './P14';
import ListIcon from '../../assets/icons/EmptyStates/ListIcon';

const StyledBox = withStyles({
  root: {
    transform: 'translate(-50%, -50%)',
  },
})(Box);

const ListEmptyState = ({ title, description, position }) => {
  const { t } = useTranslation();

  return (
    <StyledBox position={position} top="50%" left="50%" translateX="-50%" textAlign="center">
      <Box>
        <ListIcon />
      </Box>
      <P14B margin="0 0 8px 0">{t(title)}</P14B>
      <P14 color="#545A61">{t(description)}</P14>
    </StyledBox>
  );
};

ListEmptyState.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  position: PropTypes.string,
};
ListEmptyState.defaultProps = {
  position: 'absolute',
};
export default ListEmptyState;
