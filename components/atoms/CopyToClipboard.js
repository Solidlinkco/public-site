import React from 'react';
import { CopyToClipboard as Copy } from 'react-copy-to-clipboard';
import styled from 'styled-components';
import { bool, func, string } from 'prop-types';

const CopyToClipboardStyled = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  &:hover {
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: -5px;
      right: -5px;
      bottom: -5px;
      border: 3px solid #fff;
    }
    &.small {
      &:after {
        content: 'COPY';
        font-size: 12px;
        letter-spacing: -0.5px;
      }
    }
    &:after {
      content: 'CLICK TO COPY';
      position: absolute;
      top: -20px;
      left: -5px;
      right: -5px;
      background: #fff;
      text-align: center;
      font-size: 14px;
      line-height: 20px;
      overflow: hidden;
    }
  }
  > * {
    position: relative;
    z-index: 1;
  }
`;

const CopyToClipboard = ({ isSecure, className, ...restProps }) => {
  if (!isSecure) {
    return <Copy {...restProps} />;
  }

  return (
    <CopyToClipboardStyled className={className}>
      <Copy {...restProps} />
    </CopyToClipboardStyled>
  );
};

CopyToClipboard.propTypes = {
  text: string.isRequired,
  isSecure: bool,
  onCopy: func,
  className: string,
};
CopyToClipboard.defaultProps = {
  className: '',
  onCopy: undefined,
  isSecure: true,
};
export default CopyToClipboard;
