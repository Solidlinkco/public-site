import styled from 'styled-components';
import THEME from '../../constants/theme';

export const RightPaddedPageContent = styled.div`
  @media (min-width: ${THEME.breakPoints.desktop}px) {
    padding-right: 110px;
  }
`;
