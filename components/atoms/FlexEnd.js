import styled from 'styled-components';

export const FlexEnd = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: ${({ margin }) => margin || '0'};
  align-items: center;
`;
