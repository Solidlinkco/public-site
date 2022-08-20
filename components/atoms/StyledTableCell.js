import styled from 'styled-components';
import TableCell from '@material-ui/core/TableCell';
import { string } from 'prop-types';

export const StyledTableCell = styled(TableCell)`
  min-width: ${({ minWidth }) => minWidth || 'auto'};
  maxwidth: ${({ maxWidth }) => maxWidth || 'none'};
`;

StyledTableCell.propTypes = {
  minWidth: string,
  maxWidth: string,
};
