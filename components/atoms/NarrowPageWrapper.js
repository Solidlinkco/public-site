import styled from 'styled-components';

export const NarrowPageWrapper = styled.div`
  width: calc(100% - 48px);
  max-width: ${({ maxWidth }) => maxWidth || '840px'};
  margin: ${({ margin }) => margin || '0 auto'};
`;
