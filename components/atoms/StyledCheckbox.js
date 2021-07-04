import styled from 'styled-components';
import Checkbox from '@material-ui/core/Checkbox';

export const StyledCheckbox = styled(Checkbox)`
  svg {
    color: ${({ color }) => color || 'black'};
  }
`;
