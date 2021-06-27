import PropTypes from 'prop-types';
import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const slideRight = keyframes`

    from {
        opacity: 0;
    visibility: hidden;
    transform: translate(-10px, -50%);
    } to {
        opacity: 1;
        visibility: visible;
        transform: translate(0, -50%);
    }
`;

const slideRightAnimation = css`
  animation: ${slideRight} 150ms cubic-bezier(0, 0.57, 0.31, 1.02);
  animation-delay: 200ms;
  animation-fill-mode: backwards;
`;

const StyledWrapper = styled.div`
  position: relative;
  .styled-tooltip {
    position: absolute;
    z-index: 999999999999999999;

    top: 50%;
    left: 48px;
    transform: translate(0, -50%);
    background-color: #232629;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
    font-size: 12px;
    color: #fff;
    border-radius: 4px;
    padding: 4px 7px;
    max-width: 220px;
    opacity: 0;
    visibility: hidden;
    font-weight: 600;
  }

  &:hover {
    .styled-tooltip {
      ${slideRightAnimation};
      opacity: 1;
      visibility: visible;
    }
  }
`;

const Tooltip = ({ title, children }) => {
  return (
    <StyledWrapper>
      <div className="tooltip-wrapper">
        {children}

        <div className="styled-tooltip">
          <span>{title}</span>
        </div>
      </div>
    </StyledWrapper>
  );
};

Tooltip.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Tooltip;
