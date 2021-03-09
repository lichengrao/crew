import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: grid;
  grid-template:
    '. top .' 1fr
    'left center right' 2fr
    '. bottom .' 1fr /
    1fr 2fr 1fr;
  height: 100%;
  width: 100%;
  justify-items: center;
  align-items: center;
`;

export const TrickCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &.top {
    grid-area: top;
  }

  &.left {
    grid-area: left;
  }

  &.bottom {
    grid-area: bottom;
  }

  &.right {
    grid-area: right;
  }
`;
