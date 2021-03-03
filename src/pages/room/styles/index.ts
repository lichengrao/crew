import styled from 'styled-components';

export const Board = styled.div`
  flex: 1;
  display: grid;
  grid-template:
    '. topHand .' 1fr
    'leftHand Center rightHand' 5fr
    '. bottomHand .' 1fr /
    1fr 5fr 1fr;
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
  flex-direction: column;
  height: 700px;
  width: 700px;
  align-self: center;
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
    min-width: 0px;
    overflow: hidden;
  }

  &.bottom {
    background: lightgreen;
    grid-area: bottomHand;
  }

  &.right {
    background: lightpink;
    grid-area: rightHand;
    min-width: 0px;
    overflow: hidden;
  }
`;

export const PlayerHand = styled.div`
  display: flex;
  flex-direction: row;
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
