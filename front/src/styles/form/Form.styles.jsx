import {
  BaseButton,
  BaseInput,
  FlexColumnCenter,
  borderStyle,
  glowing,
  themeBackgroundColor,
  themeColor,
} from '../Base.styles';
import styled from 'styled-components';

export const StyledError = styled.div`
  ${themeColor('razzmatazz', 0.8)};
  font-size: 1rem;
  height: 24px;
`;

export const StyledForm = styled.form`
  ${FlexColumnCenter};
  z-index: 10;
  width: 400px;
  margin: 20px;
  padding: 32px 24px;
  border-radius: 1rem;

  background: linear-gradient(
        rgba(${props => props.theme.black}, 0.9),
        rgba(${props => props.theme.black}, 0.9)
      )
      padding-box,
    linear-gradient(
        290deg,
        transparent 35%,
        rgba(${props => props.theme.yellow_green}, 1),
        rgba(${props => props.theme.blue_green}, 1)
      )
      border-box;
  border: 2px solid transparent;
  font-size: 14px;
  font-family: inherit;
  gap: 5px;
  background-size: 200% 100%;
  animation: gradient 10s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }
`;

export const StyledImage = styled.img`
  width: 300px;
  margin-bottom: 20px;
`;

export const StyledLabel = styled.label`
  ${themeColor('yellow_green', 0.8)};
  text-transform: uppercase;
`;

export const StyledInput = styled(BaseInput)`
  margin-top: 2px;
  ${themeColor('nyanza', 1)};
  transition: all 0.3s ease-in-out;
  &:focus {
    ${themeColor('black', 1)};
    outline: none;
    ${themeBackgroundColor('nyanza', 0.8)};
  }
`;

export const FormStyledButton = styled(BaseButton)`
  width: 80%;
  padding: 10px;
  border: none;
  border-radius: 0.5rem;
  ${borderStyle(2)};
  ${themeColor('yellow_green', 1)};
  background-color: transparent;
  ${themeBackgroundColor('black', 0.95)};
  gap: 5px;
  margin-bottom: 10px;
  font-size: 1.2rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    ${themeBackgroundColor('yellow_green', 0.4)};
    ${themeColor('nyanza', 1)};
    border: none;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      rgba(${props => props.theme.razzmatazz}, 1),
      rgba(${props => props.theme.yellow_green}, 1),
      rgba(${props => props.theme.blue_green}, 1),
      rgba(${props => props.theme.yellow_green}, 1),
      rgba(${props => props.theme.razzmatazz}, 1),
      rgba(${props => props.theme.yellow_green}, 1),
      rgba(${props => props.theme.blue_green}, 1),
      rgba(${props => props.theme.yellow_green}, 1)
    );
    background-size: 800%;
    border-radius: 10px;
    filter: blur(36px);
    animation: ${glowing} 80s linear infinite;
  }
`;
