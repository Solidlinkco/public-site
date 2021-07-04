import styled from 'styled-components';
import { IconButton } from '@material-ui/core';

export const CustomIconButton = styled(IconButton)`
  svg {
    color: ${({ fill }) => fill || 'inherit'};
  }
`;
