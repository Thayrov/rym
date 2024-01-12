import {BaseButton, FlexCenter, themeBackgroundColor} from '../Base.styles';
import styled from 'styled-components';

export const StyledDiv = styled.div`
  ${FlexCenter};
  justify-content: space-evenly;
  position: relative;
  margin-top: 20px;
  width: auto;
  z-index: 10;
  padding-left: 20px;
  padding-right: 20px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    ${themeBackgroundColor('yellow_green', 1)};
    z-index: -1;
    opacity: 0.5;
    filter: blur(50px);
  }
`;

export const StyleButton = styled(BaseButton)`
  ${FlexCenter};
  height: 50px;
  width: 50px;
`;

export const ActiveButton = styled(BaseButton)`
  ${FlexCenter};
  height: 50px;
  width: 50px;
  ${themeBackgroundColor('yellow_green', 0.8)};
  color: white;
`;
