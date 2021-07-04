import styled from 'styled-components';

export const FlexStart = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: ${({ margin }) => margin || '0'};
  align-items: center;
  width: 100%;
`;
