import styled from 'styled-components';
import {FlexCenter} from '../Base.styles';

export const CardsDiv = styled.div`
  ${FlexCenter};
  flex-wrap: wrap;
  width: 100%;
  max-height: 550px;
  overflow-x: scroll;
  margin-top: 20px;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
