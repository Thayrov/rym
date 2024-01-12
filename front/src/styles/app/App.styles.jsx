import {FlexColumnCenter, TextShadow, themeBackgroundColor, themeColor} from '../Base.styles';
import styled from 'styled-components';

export const AppDiv = styled.div`
  ${FlexColumnCenter};
  justify-content: flex-start;
  position: relative;
  min-height: 100vh;
  text-align: center;
  ${themeBackgroundColor('black', 1)};
`;

export const MainTitle = styled.h1`
  padding-top: 20px;
  padding-bottom: 20px;
  z-index: 10;
  ${themeColor('blue_green', 1)};
  font-size: 80px;
  ${TextShadow};
  span {
    font-size: 0.5em;
    margin: 0 -0.5ch;
    vertical-align: middle;
  }
`;

export const Portal = styled.img`
  position: absolute;
  z-index: 10;
  left: 50%;
  bottom: 0;
  translate: -50% -50%;
`;
