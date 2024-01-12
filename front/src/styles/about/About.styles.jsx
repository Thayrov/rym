import {
  FlexColumnCenter,
  borderStyle,
  boxShadow,
  imageBase,
  themeBackgroundColor,
  themeColor,
} from '../Base.styles';
import styled from 'styled-components';

export const AboutContainer = styled.section`
  ${FlexColumnCenter};
  position: relative;
  max-width: 580px;
  ${themeBackgroundColor('nyanza', 0.15)};
  padding: 4rem;
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

export const ProfileImage = styled.img`
  ${imageBase(200, 200)};
  margin-bottom: 1rem;
`;

export const ProfileInfo = styled.div`
  ${themeColor('yellow_green', 0.8)};
`;

export const Name = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  max-width: 600px;
  font-size: 1.5rem;
  line-height: 1.5;
  ${themeColor('yellow_green', 0.8)};
  z-index: 10;
  text-transform: uppercase;
`;
