/**
 * Hash
 *
 * Hashing is a 1-way process, meaning that something that is hashed cannot be unhashed
 * by going backward through the process like encryption.
 *
 * When you hash data it turns it into data that looks wildly different in comparison.
 * Hashing is used for a wide-variety of problems ranging from password storage to ensuring
 * that a file hasn't changed since it was last checked by hashing the data regularly and checking
 * the differences.
 *
 * Example:
 *
 *    `plaintext data` -> `hashing_algorithm` -> `hash data`
 *
 *
 * You can imagine a simple hashing algorithm that gets the corresponding number for each letter
 * in the plaintext data and then adds all of the numbers together and returns a very large number.
 * On larger files this number can overflow real quick and break our program, so we have to keep
 * the number manageble.
 *
 * Example, password
 *
 *    `pass` -> [p=15, a=0, s=18, s=18] = (15+0+18+18) -> 51
 *
 * We hashed the password `pass` as `55` so if anyone enters, say `password` they wouldn't get 55.
 * Hashing is also more secure when you hashed to fixed sizes rather than letter the hash get as
 * big as it can. This makes the hash more secure because the password could be 10 letters long or
 * the entire anthology of Steven King and the hash would be the same amount of characters.
 */
const { letterToNumber } = require('./util');

function basic(plaintext) {
  const numbers = plaintext.split('').map(l => letterToNumber(l));
  return numbers.reduce((ttl, n) => ttl + n, 0);
}

module.exports = {
  basic,
};
