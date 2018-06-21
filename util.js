/**
 * Shared Utilities
 */
function letterToNumber(l) {
  const letter = l.toLowerCase();
  if (letter.length > 1) {
    throw new Error('Can only convert one letter at a time');
  }
  const num = letter.charCodeAt(0);
  if (num < 97 || num > 122) return false;
  return num - 97;
}

function numberToLetter(number) {
  if (number < 0 || number > 25) {
    throw new Error('Can only convert to letters a-z');
  }
  return String.fromCharCode(97 + number);
}

module.exports = {
  letterToNumber,
  numberToLetter,
};
