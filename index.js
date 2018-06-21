const encrypt = require('./encrypt');
const hash = require('./hash');

const args = process.argv;

if (args[2] === '-e') {
  const plaintext = args.slice(3).join(' ');
  console.log(encrypt.encryptROT(plaintext, 13));
}

if (args[2] === '-d') {
  const encrypted = args.slice(3).join(' ');
  console.log(encrypt.decryptROT(encrypted, 13));
}

if (args[2] === '-h') {
  const plaintext = args.slice(3).join(' ');
  console.log(hash.basic(plaintext));
}
