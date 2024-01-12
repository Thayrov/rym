import {BaseButton, BaseInput, FlexCenter, themeColor} from '../Base.styles';
import styled from 'styled-components';

export const SearchDiv = styled.div`
  ${FlexCenter};
  width: 100%;
  height: 100%;
  margin-top: 20px;
  z-index: 10;
`;

export const SearchBarStyledInput = styled(BaseInput)`
  width: 90px;
  height: 50px;
  -webkit-appearance: none;
  appearance: none;

  &::placeholder {
    ${themeColor('yellow_green', 0.8)};
  }

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    appearance: none;
  }
`;

export const SearchBarStyledButton = styled(BaseButton)`
  ${FlexCenter};
  height: 50px;
  width: 50px;
`;
