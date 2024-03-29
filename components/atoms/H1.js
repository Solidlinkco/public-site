import styled from 'styled-components';
import THEME from '../../constants/theme';
import { customTextColor } from '../../constants/CommonStyles';

export const H1 = styled.h1`
    font-weight: 500;
    font-size: 48px;
    line-height: 52px;
    ${customTextColor};
    @media (max-width: ${THEME.breakPoints.mobile}px) {
        font-size: 28px;
        line-height: 32px;
    }
`;
