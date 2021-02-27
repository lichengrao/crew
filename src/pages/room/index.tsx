import React from 'react';

import { Board, Center, Container, PlayerHand, PlayerHandArea } from './styles';

function App() {
  return (
    <Container>
      <Board>
        <Center>Center Area</Center>
        <PlayerHandArea className="top">
          <PlayerHand className="top">top</PlayerHand>
        </PlayerHandArea>
        <PlayerHandArea className="left">
          <PlayerHand className="left">left</PlayerHand>
        </PlayerHandArea>
        <PlayerHandArea className="bottom">
          <PlayerHand className="bottom">bottom</PlayerHand>
        </PlayerHandArea>
        <PlayerHandArea className="right">
          <PlayerHand className="right">right</PlayerHand>
        </PlayerHandArea>
      </Board>
    </Container>
  );
}

export default App;
