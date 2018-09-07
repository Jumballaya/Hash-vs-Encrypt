const encrypt = require('./encrypt');
const hash = require('./hash');

const start = args => {
  switch (args[2]) {
    case '-e':
      return console.log(encrypt.encryptROT(args.slice(3).join(' '), 13));
    case '-d':
      return console.log(encrypt.decryptROT(args.slice(3).join(' '), 13));
    case '-h':
      return console.log(hash.basic(args.slice(3).join(' ')));
    default:
      return console.log(`
---- Hash vs. Encrypt! ----
tool to show the difference between hashing and encrypting

Usage:
-e [text]         encrypt to ROT13 text
-d [text]         decrpyt ROT13 text
-h [text]         hash text

`);
  }
};

start(process.argv);
