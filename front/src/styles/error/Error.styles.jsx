import {FlexColumnCenter, themeColor} from '../Base.styles';
import styled from 'styled-components';

export const ErrorContainer = styled.div`
  ${FlexColumnCenter};
  justify-content: flex-start;
  min-height: 80vh;
  ${themeColor('yellow_green', 0.8)};
  font-family: monospace;
  z-index: 10;
`;

export const ErrorMessage = styled.h2`
  font-size: 2rem;
  ${themeColor('razzmatazz', 0.8)};
`;
