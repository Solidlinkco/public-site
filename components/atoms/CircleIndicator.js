import { string } from 'prop-types';
import styled, { keyframes } from 'styled-components';
import React from 'react';
import THEME from '../../constants/theme';

const glowingFrame = keyframes`
    0% {
        opacity: 0.25;
    }
    50%{
        opacity: 1;
        
    }
    70% {
        opacity: 0.5;

    }
    100%{
        opacity: 0.25;
    }
`;

const Dot = styled.div`
  margin-right: 8px;
  display: inline-block;
  height: 8px;
  width: 8px;
  border-radius: 8px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  animation: ${glowingFrame} 2s linear infinite;
  ${({ backgroundColor }) => backgroundColor !== '#1CCE6A' && `animation: false`};
  transition-delay: ${({ transition }) => transition};
  }};
`;

export const colors = {
  INTENT: '#C1C3C6',
  INACTIVE: '#C1C3C6',
  ACTIVE: THEME.statusColors.succeeded,
  COMPLETE: THEME.statusColors.succeeded,
  'Delivery Started': THEME.statusColors.succeeded,
  'Payment Started': THEME.statusColors.succeeded,
  'Shipping Started': THEME.statusColors.succeeded,
  'Started Checkout': THEME.statusColors.succeeded,
};

const DotIndicator = ({ status }) => {
  return <Dot transition={`${Math.random() * 2}s`} backgroundColor={colors[status]} />;
};

DotIndicator.propTypes = {
  status: string.isRequired,
};

export default DotIndicator;
