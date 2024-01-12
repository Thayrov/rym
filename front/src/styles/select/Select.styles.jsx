import styled from 'styled-components';
import {borderStyle, themeBackgroundColor, themeColor} from '../Base.styles';

export const SelectContainer = styled.span`
  z-index: 10;
`;

export const StyledSelect = styled.select`
  padding: 0.5rem;
  margin: 0.5rem;
  font-family: inherit;
  font-size: 1rem;
  text-transform: uppercase;
  ${themeBackgroundColor('nyanza', 0.1)};
  ${themeColor('yellow_green', 1)};
  ${borderStyle(2)};
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    ${themeBackgroundColor('yellow_green', 0.8)};
    ${themeColor('nyanza', 1)};
  }
`;

export const StyledOption = styled.option`
  ${themeBackgroundColor('yellow_green', 0.65)};
  ${themeColor('black', 1)};
`;
