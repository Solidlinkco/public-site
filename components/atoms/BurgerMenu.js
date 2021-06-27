import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { func } from 'prop-types';
import THEME from '../../constants/theme';
import { MaterialIconStyler } from './MaterialIconStyler';

const BurgerMenu = ({ clickHandler }) => (
  <IconButton edge="start" color="inherit" aria-label="menu" onClick={clickHandler}>
    <MaterialIconStyler icon={MenuIcon} color={THEME.primaryColors.black} />
  </IconButton>
);

BurgerMenu.propTypes = {
  clickHandler: func.isRequired,
};

export default BurgerMenu;
