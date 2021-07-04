import styled from 'styled-components';

export const MaxWidthContent = styled.div`
  width: 100%;
  max-width: none;
  margin-left: ${({ marginLeft }) => marginLeft || 'auto'};
  margin-right: auto;
`;
