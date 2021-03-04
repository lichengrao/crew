import styled from 'styled-components';

export const Board = styled.div`
  flex: 1;
  display: grid;
  grid-template:
    '. top .' 1fr
    'left center right' 5fr
    '. bottom .' 1fr /
    1fr 5fr 1fr;
`;

export const Center = styled.div`
  background: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 700px;
  width: 700px;
  align-self: center;
`;
