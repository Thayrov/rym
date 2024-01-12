import {
  BaseButton,
  FlexCenter,
  FlexColumnCenter,
  borderStyle,
  boxShadow,
  imageBase,
  themeBackgroundColor,
  themeColor,
} from '../Base.styles';
import styled from 'styled-components';

export const DetailContainer = styled.dialog`
  ${FlexColumnCenter};
  position: relative;
  width: 580px;
  height: 540px;

  ${themeBackgroundColor('nyanza', 0.15)};
  padding: 10px;
  border: none;
  ${borderStyle(1)};
  border-color: rgba(${props => props.theme.yellow_green}, 0.2);
  border-radius: 10px;
  margin: 20px;
  ${themeColor('yellow_green', 0.8)};
  z-index: 4;
  font-style: italic;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-family: 'schoolbell';
  ${boxShadow(0, 2, 5, 0, 'nyanza', 0.4)};
  &:after {
    content: '';
    height: 170px;
    width: 3px;
    position: absolute;
    left: -1px;
    top: 65%;
    transition: top, opacity;
    transition-duration: 600ms;
    transition-timing-function: ease;
    background: linear-gradient(
      transparent,
      rgba(${props => props.theme.yellow_green}, 1),
      transparent
    );
    z-index: 2;
    opacity: 0;
  }

  &:hover:after {
    top: 10%;
    opacity: 1;
    z-index: 2;
  }

  &:before {
    content: '';
    height: 250px;
    width: 3px;
    position: absolute;
    right: -1px;
    top: 10%;
    transition: top, opacity;
    transition-duration: 600ms;
    transition-timing-function: ease;
    background: linear-gradient(
      transparent,
      rgba(${props => props.theme.yellow_green}, 1),
      transparent
    );
    z-index: 2;
    opacity: 0;
  }

  &:hover:before {
    top: 50%;
    opacity: 1;
    z-index: 2;
  }
`;

export const CharacterName = styled.h2`
  font-size: 2rem;
  ${themeColor('yellow_green', 1)};
  margin-bottom: 0.5rem;
`;

export const SmallerCharacterName = styled(CharacterName)`
  font-size: 1.6rem;
`;

export const CharacterDetail = styled.h2`
  font-size: 1.2rem;
  margin: 5px 0;
  padding-left: 3rem;
  padding-right: 3rem;
  ${themeColor('yellow_green', 0.8)};
`;

export const CharacterImage = styled.img`
  ${imageBase(280, 280)};
  margin-top: 20px;
`;

export const BackButton = styled(BaseButton)`
  ${FlexCenter};
  height: 50px;
  width: 50px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 10;
  backdrop-filter: blur(12px);
`;
