import { Deck } from 'typings';
import { initUnshuffledDeck } from './init-unshuffled-deck';
import { shuffleCards } from './shuffle-cards';

const initShuffledDeck = (): Deck => {
  const deck: Deck = initUnshuffledDeck();
  shuffleCards(deck.playCards);
  shuffleCards(deck.taskCards);
  return deck;
};

export default initShuffledDeck;
