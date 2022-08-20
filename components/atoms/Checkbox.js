import styled from 'styled-components';

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  flex-shrink: 0;
  position: relative;
  width: 16px;
  height: 16px;
  color: #fff;
  border: 1px solid #c1c3c6;
  border-radius: 4px;
  appearance: none;
  outline: 0;
  cursor: pointer;
  background-color: #fff;
  transition: background 175ms ease-out;
  transform: scale(1.1);
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    display: block;
    top: ${({ top }) => top || '1px'};
    left: 4px;
    width: ${({ width }) => width || '5px'};
    height: ${({ height }) => height || '10px'};
    border-style: solid;
    border-color: #3023c8;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    opacity: 0;
  }
  &:checked {
    background-color: #fff;
    border-color: #3023c8;
    &::before {
      opacity: 1;
    }
  }
`;
