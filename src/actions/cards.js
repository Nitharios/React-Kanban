export const LOAD_CARDS = 'LOAD_CARDS';

export const loadCards = (cards) => {
  console.log('loadCards invoked');
  return {
    type : LOAD_CARDS,
    cards : cards
  }
}