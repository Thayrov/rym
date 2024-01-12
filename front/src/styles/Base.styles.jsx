import styled, {css, keyframes} from 'styled-components';

/* ############## BASE THEME ############## */

export const theme = {
  // palette: https://coolors.co/98e05a-070304-dfeed4-e32977-0098b8
  yellow_green: '90, 224, 90',
  black: '7, 3, 4',
  nyanza: '223, 238, 212',
  razzmatazz: '227, 41, 119',
  blue_green: '0, 152, 184',
};

/* ############## BASE FUNCTIONS ############## */

export const borderStyle = thickness => css`
  border: ${thickness}px solid rgba(${props => props.theme.yellow_green}, 0.8);
`;

export const themeColor = (color, opacity) => css`
  color: rgba(${props => props.theme[color]}, ${opacity});
`;

export const themeBackgroundColor = (color, opacity) => css`
  background-color: rgba(${props => props.theme[color]}, ${opacity});
`;

export const boxShadow = (x, y, blur, spread, color, opacity) => css`
  box-shadow: ${x}px ${y}px ${blur}px ${spread}px rgba(${props => props.theme[color]}, ${opacity});
`;

export const imageBase = (w, h) => css`
  width: ${w}px;
  height: ${h}px;
  border-radius: 50%;
  ${borderStyle(3)};
  object-fit: cover;
`;

/* ############## BASE STYLES ############## */

export const FlexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FlexColumnCenter = css`
  ${FlexCenter};
  flex-direction: column;
`;

export const TextShadow = css`
  text-shadow: 0.04em 0.04em 0.04em rgb(${props => props.theme.yellow_green}),
    -0.04em -0.04em 0.04em rgb(${props => props.theme.yellow_green}),
    0 0 0.2em rgb(${props => props.theme.yellow_green});
`;

/* ############## BASE COMPONENTS ############## */

export const BaseButton = styled.button`
  position: relative;
  ${FlexCenter}
  cursor: pointer;
  font-family: 'schoolbell';
  font-size: 2rem;
  margin: 10px;
  transition: 0.3s;
  border-radius: 50%;
  ${borderStyle(2)};
  ${themeColor('yellow_green', 0.8)};
  ${themeBackgroundColor('nyanza', 0.1)};
  &:hover {
    ${themeBackgroundColor('yellow_green', 0.8)};
    color: white;
  }
`;

export const BaseInput = styled.input`
  width: 80%;
  margin: 10px;
  padding: 10px;
  ${themeBackgroundColor('nyanza', 0.1)};
  ${themeColor('yellow_green', 0.8)};
  ${borderStyle(2)};
  border-radius: 0.5rem;
  font-family: 'schoolbell';
  font-size: 1.2rem;
  text-align: center;
`;

/* ############## ANIMATIONS ############## */

export const spinning = keyframes`
    to {
      transform: rotate(360deg);
    }
`;

export const glowing = keyframes`
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
`;

export const rotate = keyframes`
  from {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(1.5);
  }
  to {
    transform: rotate(360deg) scale(1);
  }
`;

export const panImage = keyframes`
    0% {
      background-position: 36% 42%;
      background-size: 200%;
    }
    33% {
      background-position: 30% 35%;
      background-size: 200%;
    }
    33.0001% {
      background-position: 60% 85%;
      background-size: 200%;
    }
    66% {
      background-position: 49% 81%;
      background-size: 200%;
    }
    66.0001% {
      background-position: 80% 42%;
      background-size: 200%;
    }
    100% {
      background-position: 84% 33%;
      background-size: 200%;
    }
`;

export const panOverlay = keyframes`
    from {
      background-position: 0% 0%;
    }
    to {
      background-position: 0% -100%;
    }
`;

export const animStar = keyframes`
    from {
      transform: translateY(0);
    }

    to {
      transform: translateY(-135rem);
    }
`;

export const animStarRotate = keyframes`
    from {
      transform: rotate(180deg);
    }

    to {
      transform: rotate(0);
    }
`;

export const moveInCircle = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const moveVertical = keyframes`
  0% {
    transform: translateY(-50%);
  }
  50% {
    transform: translateY(50%);
  }
  100% {
    transform: translateY(-50%);
  }
`;

export const moveHorizontal = keyframes`
  0% {
    transform: translateX(-50%) translateY(-10%);
  }
  50% {
    transform: translateX(50%) translateY(10%);
  }
  100% {
    transform: translateX(-50%) translateY(-10%);
  }
`;

export const spiralOut = keyframes`

  0% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: scale(0) rotate(360deg);
    opacity: 0;
  }

`;
