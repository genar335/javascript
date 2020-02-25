const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const ALPHABET_ARRAY = alphabet.split('');

export const isPangram = (theFrase) => {
  theFrase = theFrase.replace(/\s/g, '').toLowerCase().split('');
  let answer = true;
  ALPHABET_ARRAY.forEach(element => {
    if (!theFrase.includes(element)) { answer = false }
  }); 
  return answer;
};