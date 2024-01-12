import styled from 'styled-components';
import {
  animStar,
  animStarRotate,
  glowing,
  moveHorizontal,
  moveInCircle,
  moveVertical,
  rotate,
} from '../Base.styles';

export const StyledBlob = styled.div`
  position: absolute;

  height: 20vmax;
  aspect-ratio: 1;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  border-radius: 50%;
  background: linear-gradient(
    to right,
    rgb(${props => props.theme.blue_green}),
    rgb(${props => props.theme.razzmatazz})
  );
  animation: ${rotate} 20s infinite;
  opacity: 0.8;
  z-index: 1;
  overflow: hidden;
`;

export const StyledBlur = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 3;
  backdrop-filter: blur(12vmax);
  overflow: hidden;
`;

export const StyledDots = styled.div`
  position: absolute;
  top: 0;
  z-index: 3;
  height: 200%;
  width: 200%;
  background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-position: 50% 50%;
  background-size: 5rem 5rem;
  animation: ${glowing} 900s infinite;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: -10rem;
    left: -100rem;
    width: 300%;
    height: 200%;
    animation: ${animStarRotate} 900s linear infinite;
  }

  &::after {
    background-image: radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px);
    background-size: 150px 150px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -50%;
    width: 170%;
    height: 500%;
    animation: ${animStar} 900s linear infinite;
  }

  &::before {
    background-image: radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1%);
    background-size: 90px 90px;
    opacity: 0.5;
  }
`;

export const StyledBlob1 = styled.div`
  position: absolute;
  background: radial-gradient(
      circle at center,
      rgba(var(--color1), 0.8) 0,
      rgba(var(--color1), 0) 50%
    )
    no-repeat;
  mix-blend-mode: var(--blending);

  width: var(--circle-size);
  height: var(--circle-size);
  top: calc(50% - var(--circle-size) / 2);
  left: calc(50% - var(--circle-size) / 2);

  transform-origin: center center;
  animation: ${moveVertical} 30s ease infinite;

  overflow: hidden;
  opacity: 1;
`;

export const StyledBlob2 = styled.div`
  position: absolute;
  background: radial-gradient(
      circle at center,
      rgba(var(--color2), 0.8) 0,
      rgba(var(--color2), 0) 50%
    )
    no-repeat;
  mix-blend-mode: var(--blending);
  overflow: hidden;

  width: var(--circle-size);
  height: var(--circle-size);
  top: calc(50% - var(--circle-size) / 2);
  left: calc(50% - var(--circle-size) / 2);

  transform-origin: calc(50% - 400px);
  animation: ${moveInCircle} 20s reverse infinite;

  opacity: 1;
`;

export const StyledBlob3 = styled.div`
  position: absolute;
  background: radial-gradient(
      circle at center,
      rgba(var(--color3), 0.8) 0,
      rgba(var(--color3), 0) 50%
    )
    no-repeat;
  mix-blend-mode: var(--blending);

  width: var(--circle-size);
  height: var(--circle-size);
  top: calc(50% - var(--circle-size) / 2 + 200px);
  left: calc(50% - var(--circle-size) / 2 - 500px);

  transform-origin: calc(50% + 400px);
  animation: ${moveInCircle} 40s linear infinite;
  overflow: hidden;

  opacity: 1;
`;

export const StyledBlob4 = styled.div`
  position: absolute;
  background: radial-gradient(
      circle at center,
      rgba(var(--color4), 0.8) 0,
      rgba(var(--color4), 0) 50%
    )
    no-repeat;
  mix-blend-mode: var(--blending);

  width: var(--circle-size);
  height: var(--circle-size);
  top: calc(50% - var(--circle-size) / 2);
  left: calc(50% - var(--circle-size) / 2);

  transform-origin: calc(50% - 200px);
  animation: ${moveHorizontal} 40s ease infinite;
  overflow: hidden;

  opacity: 0.7;
`;

export const StyledBlob5 = styled.div`
  position: absolute;
  background: radial-gradient(
      circle at center,
      rgba(var(--color5), 0.8) 0,
      rgba(var(--color5), 0) 50%
    )
    no-repeat;
  mix-blend-mode: var(--blending);

  width: calc(var(--circle-size) * 2);
  height: calc(var(--circle-size) * 2);
  top: calc(50% - var(--circle-size));
  left: calc(50% - var(--circle-size));

  transform-origin: calc(50% - 800px) calc(50% + 200px);
  animation: ${moveInCircle} 20s ease infinite;
  overflow: hidden;

  opacity: 1;
`;
