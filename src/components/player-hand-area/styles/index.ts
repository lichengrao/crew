import styled from 'styled-components';

export const PlayerHandAreaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &.top {
    background: lightblue;
    grid-area: top;
  }

  &.left {
    background: yellow;
    grid-area: left;
    min-width: 0px;
    overflow: hidden;
  }

  &.bottom {
    background: lightgreen;
    grid-area: bottom;
  }

  &.right {
    background: lightpink;
    grid-area: right;
    min-width: 0px;
    overflow: hidden;
  }
`;
