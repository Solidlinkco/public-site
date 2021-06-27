import styled from 'styled-components';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';

export const StyledExpansionPanel = styled(ExpansionPanel)`
  box-shadow: ${({ boxShadow }) => boxShadow || 'none'};
`;
