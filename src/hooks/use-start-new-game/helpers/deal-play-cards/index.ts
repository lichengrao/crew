import { Hand, PlayCard } from 'typings';
import { initHand } from './init-hand';
import { isRocketFour } from './is-rocket-four';
import { sortPlayCardsByValue } from './sort-play-cards-by-value';

interface Output {
  playerIdToHandMap: Map<string, Hand>;
  commanderId: string;
}

const dealPlayCards = (playCards: PlayCard[], playerIds: string[]): Output => {
  let commanderId: string | undefined;
  const playerIdToHandMap: Map<string, Hand> = new Map();

  playerIds.forEach((playerId) => {
    playerIdToHandMap.set(playerId, initHand());
  });

  playCards.forEach((card: PlayCard, index: number) => {
    const playerId = playerIds[index % playerIds.length];
    playerIdToHandMap.get(playerId)?.get(card.suit)?.push(card);
    if (isRocketFour(card)) {
      commanderId = playerId;
    }
  });

  playerIdToHandMap.forEach((hand) =>
    hand.forEach((playcards) => {
      sortPlayCardsByValue(playcards);
    })
  );

  if (commanderId === undefined) {
    throw new Error('Internal error: commander does not exist');
  }

  return { playerIdToHandMap, commanderId };
};

export default dealPlayCards;
