import styled from 'styled-components';
import {spinning, themeBackgroundColor} from '../Base.styles';

export const StyledSpinner = styled.div`
  background-image: linear-gradient(
    rgba(${props => props.theme.razzmatazz}, 0.35),
    rgb(${props => props.theme.blue_green})
  );
  width: 100px;
  height: 100px;
  animation: ${spinning} 1.7s linear infinite;
  text-align: center;
  border-radius: 50px;
  filter: blur(1px);
  box-shadow: 0px -5px 20px 0px rgb(${props => props.theme.razzmatazz}),
    0px 5px 20px 0px rgb(${props => props.theme.blue_green});
`;

export const InnerStyledSpinner = styled.div`
  width: 100px;
  height: 100px;
  ${themeBackgroundColor('black', 0.8)};
  border-radius: 50px;
  filter: blur(10px);
`;
