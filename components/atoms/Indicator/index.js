import styled from 'styled-components';
import { IndicatorBase } from './IndicatorBase';

const CircleIndicator = styled(IndicatorBase)`
  margin-left: 15px;

  &:after {
    left: -15px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
`;

const SquareIndicator = styled(IndicatorBase)`
  margin-left: 23px;

  &:after {
    width: 16px;
    height: 16px;
    left: -23px;
    border-radius: 4px;
  }
`;

export { CircleIndicator, SquareIndicator };
