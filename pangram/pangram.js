const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const ALPHABET_ARRAY = alphabet.split('');

export const isPangram = (theFrase) => {
  theFrase = theFrase.replace(/\s/g, '').toLowerCase().split('');
  return ALPHABET_ARRAY.every(letter => theFrase.includes(letter));
};