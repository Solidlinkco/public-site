import styled from 'styled-components';
import CardActions from '@material-ui/core/CardActions';

export const StyledCardActions = styled(CardActions)`
  margin: ${({ margin }) => margin || '0'};
  position: ${({ position }) => position || 'relative'};
`;
