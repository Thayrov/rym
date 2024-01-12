import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {
  BaseButton,
  FlexColumnCenter,
  borderStyle,
  boxShadow,
  panImage,
  panOverlay,
  themeBackgroundColor,
  themeColor,
} from '../Base.styles';

export const CardDiv = styled.div`
  ${FlexColumnCenter};
  width: 300px;
  ${borderStyle(2)};
  aspect-ratio: 10 / 16;
  border-radius: 1rem;
  ${themeBackgroundColor('black', 0.85)};
  overflow: hidden;
  position: relative;
  z-index: 10;
  margin: 10px;
  ${boxShadow(0, 5, 10, 0, 'yellow_green', 0.7)};
  &:hover {
    transform: translateY(-5px);
    ${boxShadow(0, 10, 20, 2, 'yellow_green', 0.7)};
  }

  &:after,
  &:before {
    content: '';
    height: 5px;
    position: absolute;
    z-index: 4;
    left: 50%;
    translate: -50% 0%;
    ${themeBackgroundColor('yellow_green', 0.8)};
  }

  &:before {
    width: 15%;
    top: 0rem;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }

  &:after {
    width: 25%;
    bottom: 0rem;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }
`;

export const CardImage = styled.div`
  background-image: url(${props => props.$image});
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 1;
  left: 0px;
  top: 0px;
  background-size: 300%;
  background-position: 0% 0%;
  opacity: 0.6;
  animation: ${panImage} 15s linear infinite;
`;

export const StyledButton = styled(BaseButton)`
  width: 25px;
  height: 25px;
  border: none;
  border-radius: 25%;
  ${themeBackgroundColor('black', 0.65)};
  font-size: inherit;
  &:hover {
    ${borderStyle(1)};
  }
`;

export const InfoContainer = styled.article`
  ${FlexColumnCenter};
  justify-content: space-between;
  flex-direction: column-reverse;
  z-index: 50;
  width: 95%;
  flex-grow: 1;
  position: relative;
  margin: 0.5rem;
  padding: 4rem 0.5rem;
  ${borderStyle(1)};
  border-radius: 0.6rem;
  gap: 1rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  width: inherit;
  margin-bottom: 1rem;
  ${FlexColumnCenter};
  flex-grow: 1;
`;

export const CardName = styled.div`
  position: relative;
  ${themeBackgroundColor('black', 0.65)};
  ${themeColor('yellow_green', 0.8)};
  padding: 0.5rem;
  border-radius: 0.5rem;
  max-width: 80%;
  text-transform: uppercase;
  -webkit-text-stroke: 0.4px ${props => props.theme.yellow_green};
  .randomLetters {
    font-size: 1.5rem;
    font-weight: 400;
    ${themeColor('yellow_green', 0.8)};
    text-align: center;
    -webkit-text-stroke: 0.4px ${props => props.theme.yellow_green};
    overflow: hidden;
  }
  &:before,
  &:after {
    content: '';
    height: 4px;
    width: 4px;
    position: absolute;
    ${borderStyle(2)};
    border-radius: 2px;
  }

  &:before {
    top: 45%;
    right: -1.5rem;
  }

  &:after {
    top: 45%;
    left: -1.5rem;
  }
`;

export const InfoChip = styled.h2`
  font-size: 1rem;
  ${themeColor('black', 1)};
  text-transform: uppercase;
  ${themeBackgroundColor('yellow_green', 0.65)};
  padding: 0.5rem;
  border-radius: 0.5rem;
`;

export const Screen = styled.div`
  background: linear-gradient(
    rgba(${props => props.theme.yellow_green}, 0.15),
    rgba(${props => props.theme.yellow_green}, 0.15) 2px,
    transparent 2px,
    transparent 6px
  );
  background-size: 100% 6px;
  height: 100%;
  width: 100%;
  background-repeat: repeat;
  animation: ${panOverlay} 44s infinite linear;
  position: absolute;
  z-index: 2;
  left: 0px;
  top: 0px;
`;
