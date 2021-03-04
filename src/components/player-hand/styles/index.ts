import styled from 'styled-components';

export const PlayerHandContainer = styled.div`
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
