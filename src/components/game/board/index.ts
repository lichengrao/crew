import {
  allCards,
  initDeck,
  initMission,
  initPlayer,
  initTrick,
  isRocketFour,
  printCard,
  printCards,
  removeCard,
  trickWinner,
  validCards,
} from 'components';

import {
  Board,
  GameState,
  Deck,
  PlayCard,
  MissionId,
  Player,
  Suit,
  Trick,
} from 'typings';

export const initBoard = (playerIds: number[], missionId: MissionId): Board => {
  const deck: Deck = initDeck();
  const players: Player[] = playerIds.map((pid) => initPlayer(pid));
  const commander: Player = dealPlayCards(deck, players);

  return {
    players: players,
    numPlayers: players.length,
    deck: deck,
    commander: commander,
    leader: commander,
    curPlayer: commander,
    mission: initMission(missionId),
    status: GameState.InProgress,
    round: 1,
    numRounds: Math.floor(40 / players.length),
    tricks: [initTrick(1)],
  };
};

/**
 * return Player from players that matches playerId
 * @param players array of Players
 * @param playerId playerId to match
 */
export const getPlayer = (players: Player[], playerId: number): Player => {
  const player: Player | undefined = players.find(
    (p: Player) => p.playerId === playerId
  );
  if (player === undefined) {
    throw new Error('Internal error: playerId not found');
  }
  return player;
};

/**
 * deals cards to players and returns the commander
 * @param deck shuffled deck
 * @param players list of Players
 */
export const dealPlayCards = (deck: Deck, players: Player[]): Player => {
  let commander: Player | undefined;
  deck.playCards.forEach((card: PlayCard, index: number) => {
    const player: Player = players[index % players.length];
    card.playerId = player.playerId;
    player.myCards.get(card.suit)?.push(card);
    if (isRocketFour(card)) {
      commander = player;
    }
  });
  if (commander === undefined) {
    throw new Error('Internal error: commander does not exist');
  }
  return commander;
};

export const getPlayableCards = (board: Board, player: Player): PlayCard[] => {
  if (player === board.leader) {
    return allCards(player.myCards);
  }
  const leadSuit: Suit = curTrick(board).cards[0].suit;
  return validCards(player.myCards, leadSuit);
};

export const playPlayCard = (board: Board, playCard: PlayCard): void => {
  const player: Player = board.curPlayer;
  if (!removeCard(player.myCards, playCard)) {
    throw new Error("Internal error: card does not exist in player's hand");
  }

  console.log(`You played ${printCard(playCard)}!`);
  const trick: Trick = curTrick(board);
  trick.cards.push(playCard);
  board.curPlayer = nextPlayer(board);

  resolveTrick(board);
};

export const resolveTrick = (board: Board): void => {
  const trick: Trick = curTrick(board);
  if (trick.cards.length < board.numPlayers) {
    return;
  }

  const winnerId: number = trickWinner(trick);
  const winner: Player = getPlayer(board.players, winnerId);
  winner.myTricks.push(trick);
  console.log(
    `Winner of trick ${board.round} [${printCards(
      trick.cards
    )}]: player ${winnerId}`
  );

  board.round++;
  board.tricks.push(initTrick(board.round));
  board.leader = winner;
  board.curPlayer = winner;

  resolveGame(board);
};

export const resolveGame = (board: Board): void => {
  if (board.round <= board.numRounds) {
    return;
  }
  board.status = GameState.Success;
};

export const curTrick = (board: Board): Trick => {
  return board.tricks[board.round - 1];
};

export const nextPlayer = (board: Board): Player => {
  const index: number = board.players.indexOf(board.curPlayer);
  return board.players[(index + 1) % board.numPlayers];
};
