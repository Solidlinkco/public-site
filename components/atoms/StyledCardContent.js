import styled from 'styled-components';
import CardContent from '@material-ui/core/CardContent';

export const StyledCardContent = styled(CardContent)`
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0  0 35 0'};
  align-self: ${({ alignSelf }) => alignSelf || 'auto'};
`;
