import styled from 'styled-components';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import DialogContentText from '@material-ui/core/DialogContentText';
import defaultFont from './defaultFont';

const paddingX = '24px';
const paddingY = '32px';

const StyledPaper = styled(Paper)`
  &.MuiPaper-root {
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.04), 0px 0px 14px rgba(0, 0, 0, 0.04) !important;
    &.MuiPaper-rounded {
      border-radius: ${({ borderRadius }) => borderRadius ?? '24px'};
    }
  }
`;

const StyledDialog = styled(Dialog)`
  &.MuiDialog-root {
    & .MuiBackdrop-root {
      background-color: rgba(193, 195, 198, 0.4) !important;
    }
    & .MuiDialog-paperWidthXs {
      max-width: 389px;
    }
    & .MuiDialog-paperWidthLg {
      max-width: 750px;
    }
  }
`;

const StyledDialogActions = styled(DialogActions)`
  &.MuiDialogActions-root {
    padding: ${paddingX} ${paddingY};

    &.MuiDialogActions-spacing {
      & > :not(:first-child) {
        margin-left: 12px;
      }
    }
  }
`;

const StyledDialogContent = styled(DialogContent)`
  &.MuiDialogContent-root {
    padding: 0 ${({ px }) => px ?? paddingY};
  }
`;
const StyledDialogContentText = styled(DialogContentText)`
  &.MuiDialogContentText-root {
    padding: 0 ${paddingY};
    font-size: 14px;
    line-height: 20px;
    color: #787f88;
    width: 90%;
  }
`;

const StyledDialogTitle = styled(DialogTitle)`
  &.MuiDialogTitle-root {
    padding: ${paddingX} ${paddingY} 10px;

    ${defaultFont};
    font-size: 24px;
    line-height: 29px;
    font-weight: 500;
  }
`;

export {
  StyledDialog,
  StyledDialogActions,
  StyledDialogContent,
  StyledDialogTitle,
  StyledPaper,
  StyledDialogContentText,
  paddingX,
  paddingY,
};
