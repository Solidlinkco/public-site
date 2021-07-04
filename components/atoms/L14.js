import styled, { css } from 'styled-components';
import { customTextColor } from '../../constants/CommonStyles';

export const L14 = styled.p`
  font-size: 14px;
  line-height: 24px;
  cursor: pointer;
  text-decoration: none;
  ${customTextColor};
  ${({ noHover }) =>
    !noHover &&
    css`
      &:hover {
        text-decoration: underline;
      }
    `};
`;
