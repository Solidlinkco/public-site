import styled from 'styled-components';

export const FlexSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${({ margin }) => margin || '0'};
  align-items: center;
  width: 100%;
`;
