import { Hand, PlayCard } from 'typings';
import { initHand } from './init-hand';
import { isRocketFour } from './is-rocket-four';
import { sortPlayCardsByValue } from './sort-play-cards-by-value';

interface Output {
  playerIdToHandMap: { [playerId: string]: Hand };
  commanderId: string;
}

const dealPlayCards = (playCards: PlayCard[], playerIds: string[]): Output => {
  let commanderId: string | undefined;
  const playerIdToHandMap: { [playerId: string]: Hand } = {};

  playerIds.forEach((playerId) => {
    playerIdToHandMap[playerId] = initHand();
  });

  playCards.forEach((card: PlayCard, index: number) => {
    const playerId = playerIds[index % playerIds.length];
    playerIdToHandMap[playerId]?.[card.suit]?.push(card);
    if (isRocketFour(card)) {
      commanderId = playerId;
    }
  });

  Object.values(playerIdToHandMap).forEach((hand) => {
    Object.values(hand).forEach((playcards) => {
      sortPlayCardsByValue(playcards);
    });
  });

  if (commanderId === undefined) {
    throw new Error('Internal error: commander does not exist');
  }

  return { playerIdToHandMap, commanderId };
};

export default dealPlayCards;
