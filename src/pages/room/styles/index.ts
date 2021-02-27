import styled from 'styled-components';

export const Board = styled.div`
  flex: 1;
  display: grid;
  grid-template:
    '. topHand .' 2fr
    'leftHand Center rightHand' 7fr
    '. bottomHand .' 2fr /
    2fr 7fr 2fr;
`;

export const Center = styled.div`
  background: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: Center;
`;

export const Container = styled.div`
  display: flex;
  height: 700px;
  width: 700px;
`;

export const PlayerHandArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &.top {
    background: lightblue;
    grid-area: topHand;
  }

  &.left {
    background: yellow;
    grid-area: leftHand;
  }

  &.bottom {
    background: lightgreen;
    grid-area: bottomHand;
  }

  &.right {
    background: lightpink;
    grid-area: rightHand;
  }
`;

export const PlayerHand = styled.div`
  &.top {
  }

  &.left {
    transform: rotate(90deg);
  }

  &.bottom {
  }

  &.right {
    transform: rotate(270deg);
  }
`;
